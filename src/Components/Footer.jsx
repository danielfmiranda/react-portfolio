import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../Css/Footer.css'
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <div className={'footerContainer'} id={'#contact'}>
                <div className={'footerContent'}>
                    <h4> Find me on the web! </h4>

                    <a href={"https://github.com/manieldiranda"}>
                        <FontAwesomeIcon className={'socialIcon'} icon={faGithubSquare}/>
                    </a>

                    <a href={"https://www.linkedin.com/in/daniel-f-miranda/"}>

                        <FontAwesomeIcon className={'socialIcon'} icon={faLinkedin}/>
                    </a>


                    <a href={"mailto:manieldiranda@gmail.com"}>
                        <FontAwesomeIcon className={'socialIcon'} icon={faEnvelopeSquare}/>
                        {/*<FontAwesomeIcon className={'socialIcon'} icon={faStackOverflow}/>*/}
                    </a>

                </div>
            </div>
        );
    }
}

Footer.propTypes = {};

export default Footer;
