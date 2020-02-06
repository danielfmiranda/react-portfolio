import React, {Component} from 'react';
import PropTypes from 'prop-types';
import image1 from '../portfolioTestPictures/socialCompile.gif';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import '../Css/ProjectDetails.css'

class ProjectDetails3 extends Component {
    render() {
        return (
            <div
                className={'projectDetailsOverlay' + ' ' + `${this.props.overLayActive === 4 ? ('projectDetailsOverlayActive') : ('')}`}>
                <div className={'projectDetailsOverlayContentContainer'}>
                    <FontAwesomeIcon className={'overlayCloseButton'} onClick={this.props.overLayClose} icon={faTimes}/>

                    <div className={'imageAndInfoContainer  col-12'}>
                        <div className={'projectImage col-6'}>
                            <img className={'testProjectImage'} src={image1}/>
                        </div>
                        <div className={'projectInfo col-6'}>
                            <div className={'projectInfoTextContainer'}>
                                <h1> Social Compile </h1>
                                <p> Landing site for Social Compile, a upcoming platform to bring together travel
                                    influencers
                                    and advertisers in one of the fastest growing social media niches online.

                                </p>
                                <div className={'projectButtonsContainer'}>
                                    <div>
                                        <a href={'http://www.socialcompile.com'}>
                                            <Button className={'projectLinkButton'} onClick={this.props.overLayClose}
                                                    variant="primary">
                                                <FontAwesomeIcon className={'buttonIcon'} icon={faExternalLinkAlt}/>
                                                SocialCompile.com
                                            </Button>
                                        </a>

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

ProjectDetails3.propTypes = {};

export default ProjectDetails3;
