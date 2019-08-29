import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postWithdrawRequest } from '../actions/orderAction';

class WithdrawDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            campaign_id: this.props.data.campaign_id,
            withdraw_amount: '',
            withdraw_message: '',
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitWithdrawReq = this.onSubmitWithdrawReq.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { withdraw } = this.props;
        if ( withdraw.reqStatus !== prevProps.withdraw.reqStatus ) {
            this.resetReqData();
        }
    }

    resetReqData() {
        this.setState({
            openModal: false,
            withdraw_amount: '',
            withdraw_message: '',
        });
    }

    toggleModal(e) {
        e.preventDefault();
        this.setState({ openModal: !this.state.openModal });
    }

    onChangeInput(e) {
        this.setState( { [e.target.name]: e.target.value } );
    }

    onSubmitWithdrawReq(e) {
        e.preventDefault();
        //Send withdraw request
        this.props.postWithdrawRequest(this.state);
    }

    render() {
        const { data, data: { withdraw }, onClickBack } = this.props;
        const { openModal, withdraw_amount, withdraw_message } = this.state;

        return (
            <div className="wpcf-dashboard-content">
                <h3>{data.campaign_title} <a href="javascript:void(0)" onClick={() => onClickBack('')}> Back </a></h3>
                <div className="wpcf-dashboard-content-inner">
                    <div className="wpcf-dashboard-info-cards">
                        <div className="wpcf-dashboard-info-card">
                            <p>
                                <span className="wpcf-dashboard-info-val" dangerouslySetInnerHTML={{ __html: data.total_goal }} />
                                <span>Goal</span>
                            </p>
                        </div>
                        <div className="wpcf-dashboard-info-card">
                            <p>
                                <span className="wpcf-dashboard-info-val" dangerouslySetInnerHTML={{ __html: data.total_raised }} />
                                <span>Funding</span>
                            </p>
                        </div>
                        <div className="wpcf-dashboard-info-card">
                            <p>
                                <span className="wpcf-dashboard-info-val">{data.raised_percentage}%</span>
                                <span>Raised(%)</span>
                            </p>
                        </div>
                        <div className="wpcf-dashboard-info-card">
                            <p>
                                <span className="wpcf-dashboard-info-val" dangerouslySetInnerHTML={{ __html: data.total_receivable }} />
                                <span>Receivable</span>
                            </p>
                        </div>
                        <div className="wpcf-dashboard-info-card">
                            <p>
                                <span className="wpcf-dashboard-info-val">{data.receiver_percent}%</span>
                                <span>Commission</span>
                            </p>
                        </div>
                    </div>

                    {withdraw.request_items.length > 0 &&
                        <div className="wpcf-dashboard-info-table-wrap">
                            <table className="wpcf-dashboard-info-table">
                                <thead>
                                    <tr>
                                        <th>#Title</th>
                                        <th>#Amount</th>
                                        <th>#Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {withdraw.request_items.map((item, index) =>
                                        <tr key={index}>
                                            <td dangerouslySetInnerHTML={{ __html: item.title }} />
                                            <td dangerouslySetInnerHTML={{ __html: item.amount }} />
                                            <td> <span className={'label-' + (item.status == 'paid') ? 'success' : 'warning'}>{item.status}</span></td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan="1"></td>
                                        <td><strong>Receivable</strong></td>
                                        <td dangerouslySetInnerHTML={{ __html: data.total_receivable }} />
                                    </tr>
                                    <tr>
                                        <td colSpan="1"></td>
                                        <td> <strong> Total Withdraw </strong> </td>
                                        <td dangerouslySetInnerHTML={{ __html: withdraw.total_withdraw }} />
                                    </tr>
                                    <tr>
                                        <td colSpan="1"></td>
                                        <td> <strong> Balance </strong> </td>
                                        <td dangerouslySetInnerHTML={{ __html: withdraw.balance }} />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                    <div className="wpneo-wallet-withdraw-button">
                        <div id="wpneo-fade" className="wpcf-message-overlay"></div>
                        <button className="label-primary wpcf-message" onClick={this.toggleModal}>Withdraw</button>

                        {openModal &&
                            <div className="wpneo-modal-wrapper" style={{ display: 'block' }}>
                                <div className="wpneo-modal-content">
                                    <div className="wpneo-modal-wrapper-head">
                                        <h4 id="wpcf_modal_title">Withdraw Info</h4>
                                        <a href="javascript:void(0);" onClick={this.toggleModal} className="wpneo-modal-close">×</a>
                                    </div>
                                    <div className="wpneo-modal-content-inner">
                                        <form onSubmit={ this.onSubmitWithdrawReq }>
                                            <div id="wpcf_modal_message">
                                                <div className="wpneo-single">
                                                    <div className="wpneo-name">Amount</div>
                                                    <div className="wpneo-fields">
                                                        <input type="number" name="withdraw_amount" placeholder="Withdrawal amount" value={ withdraw_amount } onChange={this.onChangeInput} />
                                                        <small>(You can withdraw upto <span dangerouslySetInnerHTML={{ __html: withdraw.balance }} />)</small>
                                                    </div>
                                                </div>
                                                <div className="wpneo-single">
                                                    <div className="wpneo-name">Message</div>
                                                    <div className="wpneo-fields">
                                                        <textarea name="withdraw_message" className="wpcf-wallet-withdraw-message" value={ withdraw_message } onChange={this.onChangeInput} />
                                                    </div>
                                                </div>
                                                <button className="wpcf-withdraw-req-button"> Withdraw </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    withdraw: state.withdraw
})

export default connect( mapStateToProps, { postWithdrawRequest })(WithdrawDetails);