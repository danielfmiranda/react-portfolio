import React, {Component} from 'react';
import '../Css/ContactMeSection.css'
import Fade from 'react-reveal/Fade';

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
            <div className={'contactMeFormContainer'} id={'#contact'} >
                <div className="container" >

                    <div className={'titleContainer'}>
                        <h1 className={'portfolioHeading'}> Contact Me </h1>
                    </div>
                    <div className={'portfolioDivider'}/>
                    <div className="row">

                        <div className="col-lg-8 mx-auto">

                            <form name="contact" method="post">
                                <Fade className={'contactFormFadeContainer'} bottom>

                                    <input type="hidden" name="form-name" value="contact"/>

                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name:</label><input className="form-control" type="text"
                                                                   placeholder="Name"
                                                                   required="required"
                                                                   name="name"
                                                                   data-validation-required-message="Please enter your name."/>
                                    </div>


                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email:</label><input className="form-control" type="email"
                                                                    placeholder="Email"
                                                                    required="required"
                                                                    name="email"
                                                                    data-validation-required-message="Please enter your email."/>
                                    </div>


                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone:</label><input className="form-control" type="text"
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
                                </Fade>

                            </form>


                        </div>

                    </div>
                </div>
            </div>
        )
            ;
    }
}

ContactMeSection.propTypes = {};

export default ContactMeSection;
