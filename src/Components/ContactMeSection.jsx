import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/ContactMeSection.css'

class ContactMeSection extends Component {
    render() {
        return (
            <div className={'contactMeFormContainer'}>
                <div className="container">
                    <div className={'titleContainer'}>
                        <h1 className={'portfolioHeading'}> Contact Me </h1>
                    </div>

                    <form name="contact" method="POST" data-netlify="true">
                        <p>
                            <label>Your Name: <input type="text" name="name"/></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email"/></label>
                        </p>
                        <p>
                            <label>Your Role: <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                            </select></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                    <div className={'portfolioDivider'}/>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form id="contactForm" name="contact" noValidate="novalidate" netlify
                                  netlify-honeypot="bot-field">
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name</label><input className="form-control" id="name" type="text"
                                                                  placeholder="Name" required="required"
                                                                  name="name"
                                                                  data-validation-required-message="Please enter your name."/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label><input className="form-control" id="email"
                                                                           type="email" placeholder="Email Address"
                                                                           required="required"
                                                                           name="email"
                                                                           data-validation-required-message="Please enter your email address."/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label><input className="form-control" id="phone" type="tel"
                                                                          placeholder="Phone Number" required="required"
                                                                          name="phone"
                                                                          data-validation-required-message="Please enter your phone number."/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label><textarea className="form-control" id="message" rows="5"
                                                                        placeholder="Message" required="required"
                                                                        name="message"
                                                                        data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br/>
                                <div id="success"></div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-xl" id="sendMessageButton"
                                            type="submit">Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

ContactMeSection.propTypes = {};

export default ContactMeSection;
