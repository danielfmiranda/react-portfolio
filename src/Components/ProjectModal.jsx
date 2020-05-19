import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';

import '../Css/ProjectModal.css'
import portfolioImage2 from "../portfolioTestPictures/timelyDesktop2.PNG";
import refillrImage from "../portfolioTestPictures/refillrDesktop.PNG";
import greendlyImage from "../portfolioTestPictures/greendlyDesktop.PNG";
import socialCompileImage from "../portfolioTestPictures/socialCompileDesktop.png";
import loteriaImage from "../portfolioTestPictures/loteriaDesktop.PNG";
import socialMediaDashboardImage from '../portfolioTestPictures/socialMediaDashboard.PNG';
import fyloImage from '../portfolioTestPictures/fyloDesktop.png';

import ProjectModalContent from "./ProjectModalContent";

class ProjectModal extends Component {


    projectContentSwitch(param) {
        switch (param) {
            case 1:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Timely'}
                    projectDescription={'Employee time management app that gives employees ability to clock in and out of shifts, and admins/managers the ability to view their teams entries as well as some general team data visualization.'}
                    technologiesUsed={
                        <div className={'technologiesUsed'}>
                            <li> React - ( <b>Frontend</b> )</li>
                            <li> Graph.js - ( <b>Data Visualization</b> )</li>
                            <li> Django/REST - ( <b>Backend/API</b> )</li>
                        </div>
                    }
                    projectImage={portfolioImage2}
                    projectLink={'https://timely-demo.herokuapp.com'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'https://github.com/manieldiranda/timely'}


                />;
            case 2:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Refillr'}
                    projectDescription={'Application to help users find and add water bottle refill stations with an interactive google map.'}
                    technologiesUsed={
                        <div className={'technologiesUsed'}>
                            <li> React - ( <b>Frontend</b> )</li>
                            <li> React-Google-Map - ( <b>Map Component</b> )</li>
                            <li> Django/REST - ( <b>Backend/API</b> )</li>
                        </div>
                    }
                    projectImage={refillrImage}
                    projectLink={'https://refillr-demo.herokuapp.com'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'https://github.com/manieldiranda/refillr'}


                />;
            case 3:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Greendly'}
                    projectDescription={'Online shop for Greendly, a brand that sells high quality, affordable, zero waste products.'}
                    technologiesUsed={
                        <div className={'technologiesUsed'}>
                            <li> Shopify - ( <b>Hosting</b> )</li>
                            <li> HTML - ( <b>Frontend</b> )</li>
                            <li> CSS - ( <b>Styling</b> )</li>
                        </div>
                    }
                    projectImage={greendlyImage}
                    projectLink={'http://www.greendly.co'}
                    projectLinkName={'greendly.co'}
                    gitHubLink={null}


                />;
            case 4:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'SocialCompile'}
                    projectDescription={'Landing site for Social Compile, a upcoming platform to bring together travel influencers and advertisers in one of the fastest growing social media niches.'}
                    technologiesUsed={
                        <div className={'technologiesUsed'}>
                            <li> WordPress - ( <b>Hosting</b> )</li>
                            <li> HTML - ( <b>Frontend</b> )</li>
                            <li> CSS - ( <b>Styling</b> )</li>
                        </div>
                    }
                    projectImage={socialCompileImage}
                    projectLink={'http://socialcompile.com'}
                    projectLinkName={'SocialCompile.com'}
                    gitHubLink={null}


                />;
            case 5:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Loteria'}
                    projectDescription={`Recreation of Google's Loteria doodle, a mexican game similar to bingo. I built the game logic using ReactJS and built the card using Bootstrap's grid system.`}
                    technologiesUsed={
                        <div>
                            <div className={'technologiesUsed'}>
                                <li> React - ( <b>Frontend</b> )</li>
                                <li> HTML - ( <b>Frontend</b> )</li>
                                <li> CSS - ( <b>Styling</b> )</li>
                            </div>

                            <b><p> Multiplayer coming soon!</p></b>
                        </div>
                    }
                    projectImage={loteriaImage}
                    projectLink={'http://dannys-loteria.netlify.app'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'http://github.com/manieldiranda/loteria'}


                />;
            case 6:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Social Media Dashboard'}
                    projectDescription={`A responsive dashboard to track views and likes across all platforms`}
                    technologiesUsed={
                        <div>
                            <div className={'technologiesUsed'}>
                                <li> React - ( <b>Frontend</b> )</li>
                                <li> HTML - ( <b>Frontend</b> )</li>
                                <li> CSS - ( <b>Styling</b> )</li>
                                <li> Bootstrap - ( <b>Grid System</b> )</li>
                            </div>
                            <p><b>Note: </b> Test data being used on live demo</p>


                        </div>
                    }
                    projectImage={socialMediaDashboardImage}
                    projectLink={'http://daniels-social-media-dashboard.netlify.app'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'http://github.com/manieldiranda/social_media_dashboard'}


                />;
            case 7:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Fylo Landing Page'}
                    projectDescription={` Responsive landing page for a fictional tech company called Fylo. I used assets from FrontendMentor.io and coded the landing page using React.`}
                    technologiesUsed={
                        <div>
                            <div className={'technologiesUsed'}>
                                <li> React - ( <b>Frontend</b> )</li>
                                <li> HTML - ( <b>Frontend</b> )</li>
                                <li> CSS - ( <b>Styling</b> )</li>
                                <li> Bootstrap - ( <b>Grid System</b> )</li>
                            </div>


                        </div>
                    }
                    projectImage={fyloImage}
                    projectLink={'http://fylo-demo.netlify.app'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'http://github.com/manieldiranda/fylo_landing_page'}


                />;

            default:
                return null;
        }
    }


    render() {


        return (
            <div>
                <Modal
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"


                    centered
                    show={this.props.showProjectModal}
                >

                    {this.projectContentSwitch(this.props.projectSelected)}


                </Modal>

            </div>
        );
    }
}

ProjectModal.propTypes = {};

export default ProjectModal;
