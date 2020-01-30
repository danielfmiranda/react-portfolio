import React, {Component} from 'react';
import '../Css/ContentContainer.css';
import PortfolioProjects from './PortfolioProjects';
import AboutMeSection from './AboutMeSection';
import image1 from '../portfolioTestPictures/refillrTestPhoto.png';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';



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
                                    <div className={'projectButtonsContainer'}>
                                        <div>
                                            <Button className={'projectLinkButton'} onClick={this.props.overLayClose} variant="light">
                                                <FontAwesomeIcon  icon={faGithub}/>
                                                  GitHub
                                            </Button>

                                            <Button  className={'projectLinkButton'} onClick={this.props.overLayClose} variant="primary">
                                                 <FontAwesomeIcon  icon={faExternalLinkAlt}/>
                                                Project
                                            </Button>

                                        </div>

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

ContentContainer.propTypes = {};

export default ContentContainer;
