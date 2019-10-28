import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchMyCampaigns } from '../actions/campaignAction';
import CampaignReport from '../containers/campaignReport';
import ItemCampaign from '../components/itemCampaign';
import CampaignUpdate from '../components/campaignUpdate';
import Pagination from '../components/pagination';
import Header from '../components/contentHeader';

class MyCampaigns extends Component {
	constructor (props) {
        super(props);
        this.state = {
            pageOfItems: [],
            filterValue: 'running',
            campaignReport: { id: '', name: '' },
            campaignId: '',
            updates: [],
        };
        this.onChangePage = this.onChangePage.bind(this);
        this.onClickReport = this.onClickReport.bind(this);
        this.onClickUpdates = this.onClickUpdates.bind(this);
    }

    componentDidMount() {
        const { loaded } = this.props.campaign;
        if( !loaded ) {
            this.props.fetchMyCampaigns();
        }
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
    }

    onClickFilter(e) {
        e.preventDefault();
        const filterValue = e.target.innerText.toLowerCase();
        this.setState({ filterValue });
    }

    onClickReport(campaignReport) {
        this.setState({ campaignReport });
    }

    onClickUpdates(campaignId, updates) {
        this.setState({ campaignId, updates });
    }

    getCampaignData() {
        const { filterValue } = this.state;
        const { campaign } = this.props;
        const filterData = campaign.data.filter( item => item.status == filterValue );
        return filterData;
    }

	render() {
        const { campaign } = this.props;
        const { pageOfItems, filterValue, campaignReport, campaignId, updates } = this.state;
        if( campaign.loading ) {
            return (
                <div>
                    Loading...
                </div>
            )
        };

        if( campaignReport.id ) {
            return (
                <CampaignReport
                    campaign={ campaignReport }
                    onClickBack={ this.onClickReport }/>
            );
        }

        if( campaignId ) {
            return (
                <CampaignUpdate
                    updates={ updates }
                    campaignId={ campaignId }
                    onClickUpdates={ this.onClickUpdates }/>
            );
        }

        const campaignData = this.getCampaignData();

        return (
            <Fragment>
                <Header title={"My Campaigns"}></Header>
                <div className='wpcf-mycampaign-filter-group wpcf-btn-group'>
                    <button className={ "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue=='running'? 'active' : '') } onClick={ e => this.onClickFilter(e) }>Running</button>
                    <button className={ "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue=='pending'? 'active' : '') } onClick={ e => this.onClickFilter(e) }>Pending</button>
                    <button className={ "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue=='draft'? 'active' : '') } onClick={ e => this.onClickFilter(e) }>Draft</button>
                    <button className={ "wpcf-btn wpcf-btn-outline wpcf-btn-round wpcf-btn-secondary " + (filterValue=='completed'? 'active' : '') } onClick={ e => this.onClickFilter(e) }>Completed</button>
                </div>
                <div className="wpcf-dashboard-content-inner">
                    { campaignData.length ?
                        <Fragment>
                            { pageOfItems.map( (item, index) =>
                                <ItemCampaign
                                    key={index}
                                    data={ item }
                                    onClickReport={ this.onClickReport }
                                    onClickUpdates={ this.onClickUpdates }/>
                            ) }
                            <Pagination
                                items={ campaignData }
                                pageSize={ 5 }
                                filterValue={ filterValue }
                                onChangePage={ this.onChangePage } />
                        </Fragment>
                    :   <Fragment>
                            Campaign not found
                        </Fragment>
                    }

                </div>
            </Fragment>
        )
	}
}

const mapStateToProps = state => ({
    campaign: state.myCampaign
})

export default connect( mapStateToProps, { fetchMyCampaigns } )(MyCampaigns);
