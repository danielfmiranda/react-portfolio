import React, {Component} from 'react';
import PropTypes from 'prop-types';
import image1 from '../portfolioTestPictures/greendly.png';
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
                                <h1> Greendly </h1>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                                <div className={'projectButtonsContainer'}>
                                    <div>
                                        <a href={'http://www.greendly.co'}>
                                            <Button className={'projectLinkButton'}
                                                    variant="primary">
                                                <FontAwesomeIcon className={'buttonIcon'} icon={faExternalLinkAlt}/>
                                                Greendly.co
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