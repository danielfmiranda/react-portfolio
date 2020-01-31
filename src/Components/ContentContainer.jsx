import React, {Component} from 'react';
import '../Css/ContentContainer.css';
import PortfolioProjects from './PortfolioProjects';
import AboutMeSection from './AboutMeSection';
import image1 from '../portfolioTestPictures/refillrTestPhoto.png';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import ProjectOverlay from './ProjectOverlay';
import ProjectDetails1 from './ProjectDetails1';
import ProjectDetails2 from './ProjectDetails2';
import ProjectDetails3 from './ProjectDetails3';

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
                        showPortfolio={this.props.showPortfolio}
                        clickProjectDetails={this.props.clickProjectDetails}
                        closeProjectDetails={this.props.closeProjectDetails}
                    />
                </div>

                <ProjectOverlay
                    overLayActive={this.props.overLayActive}
                    showProject={this.props.showProject}
                    overLayClose={this.props.overLayClose}
                />


            </div>
        );
    }
}

ContentContainer.propTypes = {};

export default ContentContainer;
