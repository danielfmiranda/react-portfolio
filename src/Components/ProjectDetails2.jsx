import React, {Component} from 'react';
import PropTypes from 'prop-types';
import image1 from '../portfolioTestPictures/timelyCover.jpeg';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
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
                                <h1> Timely </h1>
                                <p> Employee clock in system, keeps track of time clocked in, clocked out, hours worked, and
                            managers can
                            see if team members were late or make changes by using administrator panel.
                                </p>
                                <div className={'projectButtonsContainer'}>
                                    <div>
                                        <a href={'https://github.com/manieldiranda/timely'}>
                                        <Button className={'projectLinkButton'}
                                                variant="light">
                                            <FontAwesomeIcon  className={'buttonIcon'} icon={faGithub}/>
                                            GitHub
                                        </Button>
                                        </a>

                                        <Button className={'projectLinkButton'} onClick={this.props.overLayClose}
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
