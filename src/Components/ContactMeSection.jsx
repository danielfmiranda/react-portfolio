import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/ContactMeSection.css'

class ContactMeSection extends Component {


//     submitForm = (e) => {
//   e.preventDefault()
//   fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: this.encode({
//           "form-name": "ask-question",
//           "form_field": "something"
//         })
//       })
//         .then(() => {
//          // custom logic goes here //
//         })
// }


    render() {
        return (
            <div className={'contactMeFormContainer'} id={'#contact'}>
                <div className="container">
                    <div className={'titleContainer'}>
                        <h1 className={'portfolioHeading'}> Contact Me </h1>
                    </div>
                    <div className={'portfolioDivider'}/>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/*<form name="contact" noValidate="novalidate" method="post">*/}
                            {/*    <div className="control-group">*/}
                            {/*        <div className="form-group floating-label-form-group controls mb-0 pb-2">*/}
                            {/*            <label>Name</label><input className="form-control" id="name" type="text"*/}
                            {/*                                      placeholder="Name" required="required"*/}
                            {/*                                      name="name"*/}
                            {/*                                      data-validation-required-message="Please enter your name."/>*/}
                            {/*            <p className="help-block text-danger"></p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="control-group">*/}
                            {/*        <div className="form-group floating-label-form-group controls mb-0 pb-2">*/}
                            {/*            <label>Email Address</label><input className="form-control" id="email"*/}
                            {/*                                               type="email" placeholder="Email Address"*/}
                            {/*                                               required="required"*/}
                            {/*                                               name="email"*/}
                            {/*                                               data-validation-required-message="Please enter your email address."/>*/}
                            {/*            <p className="help-block text-danger"></p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="control-group">*/}
                            {/*        <div className="form-group floating-label-form-group controls mb-0 pb-2">*/}
                            {/*            <label>Phone Number</label><input className="form-control" id="phone" type="tel"*/}
                            {/*                                              placeholder="Phone Number" required="required"*/}
                            {/*                                              name="phone"*/}
                            {/*                                              data-validation-required-message="Please enter your phone number."/>*/}
                            {/*            <p className="help-block text-danger"></p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="control-group">*/}
                            {/*        <div className="form-group floating-label-form-group controls mb-0 pb-2">*/}
                            {/*            <label>Message</label><textarea className="form-control" id="message" rows="5"*/}
                            {/*                                            placeholder="Message" required="required"*/}
                            {/*                                            name="message"*/}
                            {/*                                            data-validation-required-message="Please enter a message."></textarea>*/}
                            {/*            <p className="help-block text-danger"></p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <br/>*/}
                            {/*    <div id="success"></div>*/}
                            {/*    <div className="form-group">*/}
                            {/*        <button className="btn btn-primary btn-xl" id="sendMessageButton"*/}
                            {/*                type="submit">Send*/}
                            {/*        </button>*/}
                            {/*    </div>*/}
                            {/*/!*</form>*!/*/}

                            <form name="contact" method="post">
                                <input type="hidden" name="form-name" value="contact"/>

                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label><input className="form-control" type="text"
                                                              placeholder="Name"
                                                              required="required"
                                                              name="name"
                                                              data-validation-required-message="Please enter your name."/>
                                </div>
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label><input className="form-control" type="email"
                                                              placeholder="Email"
                                                              required="required"
                                                              name="email"
                                                              data-validation-required-message="Please enter your email."/>
                                </div>

                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label><input className="form-control" type="text"
                                                              placeholder="Phone"
                                                              name="phone"
                                />
                                </div>

                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label><textarea className="form-control" rows="5"
                                                                    placeholder="Message" required="required"
                                                                    name="message"
                                                                    data-validation-required-message="Please enter a message."></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-xl" id="sendMessageButton"
                                            type="submit">Send
                                    </button>
                                </div>
                            </form>


                            {/*<form name="contact" method="post">*/}
                            {/*    <input type="hidden" name="form-name" value="contact"/>*/}
                            {/*    */}
                            {/*         <input type="text" placeholder={'Name'} name="name"/>*/}
                            {/*    <p>*/}
                            {/*        <label>Your Email: <input type="email" name="email"/></label>*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        <label>Phone: <input type="text" name="phone"/></label>*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        <label>Message: <textarea name="message"></textarea></label>*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        <button type="submit">Send</button>*/}
                            {/*    </p>*/}
                            {/*</form>*/}


                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

ContactMeSection.propTypes = {};

export default ContactMeSection;
