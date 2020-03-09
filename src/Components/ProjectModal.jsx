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

class ProjectModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    size="xl"
                    centered
                    show={this.props.showModal}
                >
                    <Modal.Body
                        className={'projectModalBody'}
                    >
                        <div className={'closeButtonContainer'}>
                            <Button variant="outline-primary" className={'modalCloseButton'}
                                    onClick={this.props.hideProjectModal}>X</Button>
                        </div>

                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className={'projectModalLeftHalf'}>

                                        <img src={socialCompileImage} alt="" className="projectImage"/>


                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={'projectModalRightHalf'}>
                                        <div className={'modalTextContainer'}>
                                        <h1>Project Title</h1>
                                        <p>
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                            consectetur ac, vestibulum at eros.
                                        </p>
                                        </div>
                                        <div className={'modalLinkButtonsContainer'}>
                                            <Button
                                                className={'modalLinkButton'}
                                                variant="primary" onClick={this.props.hideProjectModal}>
                                                Live Demo   <FontAwesomeIcon icon={faExternalLinkAlt}/>


                                            </Button>
                                            <Button
                                                className={'modalLinkButton'}
                                                variant="primary"
                                                    onClick={this.props.hideProjectModal}>

                                                GitHub   <FontAwesomeIcon icon={faGithub}/>

                                            </Button>
                                        </div>

                                    </div>

                                </Col>


                            </Row>
                        </Container>

                    </Modal.Body>

                </Modal>

            </div>
        );
    }
}

ProjectModal.propTypes = {};

export default ProjectModal;
