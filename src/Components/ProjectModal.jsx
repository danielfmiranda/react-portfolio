import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Css/ProjectModal.css'
import portfolioImage2 from "../portfolioTestPictures/timelyCover.jpeg";
import refillrImage from "../portfolioTestPictures/refillrTestPhoto.png";
import greendlyImage from "../portfolioTestPictures/greendly.png";
import socialCompileImage from "../portfolioTestPictures/socialCompile.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import ProjectModalContent from "./ProjectModalContent";

class ProjectModal extends Component {


    projectContentSwitch(param) {
        switch (param) {
            case 1:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Timely'}
                    projectDescription={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                    projectImage={portfolioImage2}
                    projectLink={'comingSoon'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'https://github.com/manieldiranda/timely'}


                />;
            case 2:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Refillr'}
                    projectDescription={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                    projectImage={refillrImage}
                    projectLink={'comingSoon'}
                    projectLinkName={'Live Demo'}
                    gitHubLink={'https://github.com/manieldiranda/refillr'}


                />;
            case 3:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'Greendly'}
                    projectDescription={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                    projectImage={greendlyImage}
                    projectLink={'http://www.greendly.co'}
                    projectLinkName={'greendly.co'}
                    gitHubLink={null}


                />;
            case 4:
                return <ProjectModalContent
                    hideProjectModal={this.props.hideProjectModal}
                    projectName={'SocialCompile'}
                    projectDescription={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                    projectImage={socialCompileImage}
                    projectLink={'http://socialcompile.com'}
                    projectLinkName={'SocialCompile.com'}
                    gitHubLink={null}


                />;
            default:
                return null;
        }
    }


    render() {


        return (
            <div>
                <Modal
                    size="xl"
                    centered
                    show={this.props.showModal}
                >

                    {this.projectContentSwitch(this.props.projectSelected)}


                </Modal>

            </div>
        );
    }
}

ProjectModal.propTypes = {};

export default ProjectModal;
