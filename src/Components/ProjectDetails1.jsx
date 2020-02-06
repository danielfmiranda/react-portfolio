import React, {Component} from 'react';
import PropTypes from 'prop-types';
import image1 from '../portfolioTestPictures/refillrTestPhoto.png';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import '../Css/ProjectDetails.css'

class ProjectDetails2 extends Component {
    render() {
        return (
            <div
                className={'projectDetailsOverlay' + ' ' + `${this.props.overLayActive === 3 ? ('projectDetailsOverlayActive') : ('')}`}>
                <div className={'projectDetailsOverlayContentContainer'}>
                    <FontAwesomeIcon className={'overlayCloseButton'} onClick={this.props.overLayClose} icon={faTimes}/>

                    <div className={'imageAndInfoContainer  col-12'}>
                        <div className={'projectImage col-6'}>
                            <img className={'testProjectImage'} src={image1}/>
                        </div>
                        <div className={'projectInfo col-6'}>
                            <div className={'projectInfoTextContainer'}>

                                <h1> Refillr </h1>
                                <p> Locator App showing users the location of water fountains near them to refill their reusable
                            water bottles. Users can also
                            add a new location from their phone.
                                </p>
                                <div className={'projectButtonsContainer'}>
                                    <div>
                                        <a href={'https://github.com/manieldiranda/refillr'}>
                                            <Button className={'projectLinkButton'}
                                                    variant="light">
                                                <FontAwesomeIcon className={'buttonIcon'} icon={faGithub}/>
                                                GitHub
                                            </Button>
                                        </a>
                                        <Button className={'projectLinkButton'}
                                                variant="primary">
                                            <FontAwesomeIcon className={'buttonIcon'} icon={faExternalLinkAlt}/>
                                            Project
                                        </Button>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

ProjectDetails2.propTypes = {};

export default ProjectDetails2;
