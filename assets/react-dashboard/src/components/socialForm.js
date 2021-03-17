import React, { Component } from 'react';

class SocialForm extends Component {
    state = { 
        ...this.props.data
    }

    onChangeInput = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onClickSaveData( this.state );
    }

	render() {
        const { profile_facebook, profile_twitter, profile_instagram, profile_youtube, profile_linkedin, profile_pinterest } = this.state;
        return (
            <form onSubmit={ this.onSubmit }>
                <div className="wpcf-dashboard-item-wraper">
                    <h4 className="wpcf-social-title">Connected Social Account</h4>
                    <div className="wpcf-form-group">
                        <label htmlFor="wpcf_profile_facebook">Facebook</label>
                        <input type="text" id="wpcf_profile_facebook" name="profile_facebook" value={ profile_facebook } placeholder="www.facebook.com/wp-crowdfunding" onChange={ this.onChangeInput }/>
                    </div>
                    <div className="wpcf-form-group">
                        <label htmlFor="wpcf_profilefile_twitter">Twitter</label>
                        <input type="text" id="wpcf_profile_twitter" name="profile_twitter" value={ profile_twitter } placeholder="www.twitter.com/wp-crowdfunding" onChange={ this.onChangeInput }/>
                    </div>
                    <div className="wpcf-form-group">
                        <label htmlFor="wpcf_profile_instagram">Instagram</label>
                        <input type="text" id="wpcf_profile_instagram" name="profile_instagram" value={ profile_instagram } placeholder="www.instagram.com/wp-crowdfunding" onChange={ this.onChangeInput }/>
                    </div>
                    <div className="wpcf-form-group">
                        <label htmlFor="wpcf_profile_youtube">Youtube</label>
                        <input type="text" id="wpcf_profile_youtube" name="profile_youtube" value={ profile_youtube } placeholder="www.youtube.com/wp-crowdfunding" onChange={ this.onChangeInput }/>
                    </div>
                    <div className="wpcf-form-group">
                        <label htmlFor="wpcf_profile_linkedin">Linkedin</label>
                        <input type="text" id="wpcf_profile_linkedin" name="profile_linkedin" value={ profile_linkedin } placeholder="www.linkedin.com/wp-crowdfunding" onChange={ this.onChangeInput }/>
                    </div>
                    <div className="wpcf-form-group">
                        <label htmlFor="wpcf_profile_pinterest">Pinterest</label>
                        <input type="text" id="wpcf_profile_pinterest" name="profile_pinterest" value={ profile_pinterest } placeholder="www.pinterest.com/wp-crowdfunding" onChange={ this.onChangeInput }/>
                    </div>
                </div>
                <div className="wpcf-social-submit">
                    <button className="wpcf-btn wpcf-btn-round" type="submit"><span className="fas fa-save icon-left"></span> Save</button>
                </div>
            </form>
        )
	}
}

export default SocialForm;
