import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import '../Css/heroDiv.css';
import {motion} from "framer-motion"


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
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{type: "spring", duration: 0.7, stiffness: 30}}
                            >


                                <h1> Daniel Miranda </h1>


                                <h5> I am a <b>full-stack</b> web developer based out of the East Bay Area.
                                </h5>
                                <p> Currently working under the Automation Team at Kaiser Permanente, I use the latest
                                    technologies to build applications that aid Kaiser in our mission to provide
                                    quality, affordable healthcare.</p>
                                <p> Outside of work, I enjoy working on cars 🚗, cycling 🚴‍♂️, and spending time with my younger
                                    brother 👦🏻.

                                </p>

                                <Button onClick={this.tryThis} className={'seeMyWorkButton'} variant="outline-primary">See
                                    my work</Button>
                            </motion.div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

HeroDiv.propTypes = {};

export default HeroDiv;
