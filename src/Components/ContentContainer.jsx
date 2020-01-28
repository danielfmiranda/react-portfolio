import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/ContentContainer.css';
import PortfolioProjects from './PortfolioProjects';
import AboutMeSection from './AboutMeSection';
import NavigationHeader from './NavigationHeader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

import Project1Details from './ProjectDetailModals/Project1Details';
import image1 from '../portfolioTestPictures/refillrTestPhoto.png';


class ContentContainer extends Component {


    render() {


        return (
            <div className={'contentContainer'}>
                <div className={'content'}>
                    <AboutMeSection
                        showAboutMe={this.props.showAboutMe}
                        clickPortfolioButton={this.props.clickPortfolioButton}


                    />
                    <PortfolioProjects
                        overLayTest={this.props.overLayTest}
                        showPortfolio={this.props.showPortfolio}
                        clickProjectDetails={this.props.clickProjectDetails}
                        closeProjectDetails={this.props.closeProjectDetails}
                    />

                </div>
                <div className={'socialLinks'}>
                    <div className={'iconContainer'}>
                        <a href={'https://github.com/manieldiranda'}>
                            <FontAwesomeIcon className={'socialIcon'} icon={faGithubSquare}/>
                        </a>
                        <a href={'https://www.linkedin.com/in/daniel-f-miranda/'}>
                            <FontAwesomeIcon className={'socialIcon'} icon={faLinkedin}/>
                        </a>
                        <a href={'mailto:manieldiranda@gmail.com'}>
                            <FontAwesomeIcon className={'socialIcon'} icon={faEnvelopeSquare}/>
                        </a>
                    </div>


                </div>

                <div
                    className={'projectDetailsOverlay' + ' ' + `${this.props.overLayActive ? ('projectDetailsOverlayActive') : ('')}`}>
                    <div className={'projectDetailsOverlayContentContainer'}>
                        <div className={'imageAndInfoContainer  col-12'}>
                            <div className={'projectImage col-6'}>
                                <img className={'testProjectImage'} src={image1}/>
                            </div>
                            <div className={'projectInfo col-6'}>
                                <div className={'projectInfoTextContainer'}>
                                    <h1> PROJECT INFO </h1>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </p>
                                    <div>
                                        <button onClick={this.props.overLayClose}> GitHub</button>
                                    </div>
                                    <div>
                                        <button onClick={this.props.overLayClose}> CLOSE</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={'iconContainer'}>
                            <a href={'https://github.com/manieldiranda'}>
                                <FontAwesomeIcon className={'socialIcon'} icon={faGithubSquare}/>
                            </a>
                            <a href={'https://www.linkedin.com/in/daniel-f-miranda/'}>
                                <FontAwesomeIcon className={'socialIcon'} icon={faLinkedin}/>
                            </a>
                            <a href={'mailto:manieldiranda@gmail.com'}>
                                <FontAwesomeIcon className={'socialIcon'} icon={faEnvelopeSquare}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ContentContainer.propTypes = {};

export default ContentContainer;
