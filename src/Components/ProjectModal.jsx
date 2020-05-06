import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';

import '../Css/ProjectModal.css'
import portfolioImage2 from "../portfolioTestPictures/timelyDesktop2.PNG";
import refillrImage from "../portfolioTestPictures/refillrDesktop.PNG";
import greendlyImage from "../portfolioTestPictures/greendlyDesktop.PNG";
import socialCompileImage from "../portfolioTestPictures/socialCompileDesktop.png";
import loteriaImage from "../portfolioTestPictures/loteriaDesktop.PNG";
import socialMediaDashboardImage from '../portfolioTestPictures/socialMediaDashboard.PNG';

import ProjectModalContent from "./ProjectModalContent";

class ProjectModal extends Component {


    projectContentSwitch(param) {
        switch (param) {
            case 1:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Timely'}
                    projectDescription={'Employee time management app that gives users ability to clock in and out, and managers the ability to view their teams clock ins, and edit/delete entries.'}
                    technologiesUsed={
                        <div className={'technologiesUsed'}>
                            <li> React</li>
                            <li> Django/REST</li>
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
                            <li> React</li>
                            <li> Django/REST</li>
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
                            <li> Shopify</li>
                            <li> HTML</li>
                            <li> CSS</li>
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
                            <li> Wordpress</li>
                            <li> HTML</li>
                            <li> CSS</li>
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
                    projectDescription={`Recreation of Google's Loteria doodle, a mexican game of chance similar to bingo.`}
                    technologiesUsed={
                        <div>
                            <div className={'technologiesUsed'}>
                                <li> React</li>
                                <li> HTML</li>
                                <li> CSS</li>
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
                                <li> React</li>
                                <li> HTML</li>
                                <li> CSS</li>
                            </div>
                           <p>  <b>Note: </b> Test data being used on live demo</p>


                        </div>
                    }
                    projectImage={socialMediaDashboardImage}
                    projectLink={'http://daniels-social-media-dashboard.netlify.app'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'http://github.com/manieldiranda/social_media_dashboard'}


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
