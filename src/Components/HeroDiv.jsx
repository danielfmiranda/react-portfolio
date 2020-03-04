import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import '../Css/heroDiv.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";
import Particles from 'react-particles-js';


class HeroDiv extends Component {

    tryThis = () => {
        document.getElementById('#portfolio').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})

    }


    render() {
        return (
            <div>

                <div className={'heroDivContainer'} id={'#heroDiv'}>

                    <div className={'heroDivContent'}>


                        <div className={'contentText'}>

                            <h1> Hi, I'm Daniel </h1>
                            <h5> I am a full stack web developer based out of the East Bay Area.
                            </h5>
                            <p> Currently working under the Automation Team at Kaiser Permanente , I use the latest
                                technologies to build applications that aid Kaiser Employees in our mission to provide
                                quality, affordable healthcare.</p>
                            <p> Outside of work, I enjoy working on cars, cycling, and spending time with my younger
                                brother.

                            </p>

                            {/*        <div>*/}
                            {/*        <FontAwesomeIcon className={'heroSocialIcon'} icon={faGithubSquare}/>*/}
                            {/*<FontAwesomeIcon className={'heroSocialIcon'} icon={faLinkedin}/>*/}
                            {/*<FontAwesomeIcon className={'heroSocialIcon'} icon={faEnvelopeSquare}/>*/}
                            {/*    </div>*/}
                            <Button onClick={this.tryThis} className={'seeMyWorkButton'} variant="outline-primary">See
                                my work</Button>

                        </div>
                    </div>
                    {/*<Particles*/}
                    {/*    canvasClassName={'particles'}*/}
                    {/*    params={{*/}
                    {/*        "particles": {*/}
                    {/*            "number": {*/}
                    {/*                "value": 50*/}
                    {/*            },*/}
                    {/*            "size": {*/}
                    {/*                "value": 3*/}
                    {/*            }*/}
                    {/*        },*/}
                    {/*        "interactivity": {*/}
                    {/*            "events": {*/}
                    {/*                "onhover": {*/}
                    {/*                    "enable": true,*/}
                    {/*                    "mode": "repulse"*/}
                    {/*                }*/}
                    {/*            }*/}
                    {/*        }*/}
                    {/*    }}*/}






                    />

                    <Particles
                                                canvasClassName={'particles'}

    params={{
	    "particles": {
	        "number": {
	            "value": 100,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": .3,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },

	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	} />

                </div>


            </div>
        );
    }
}

HeroDiv.propTypes = {};

export default HeroDiv;
