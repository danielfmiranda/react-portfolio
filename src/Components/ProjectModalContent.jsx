import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Css/ProjectModal.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

class ProjectModalContent extends Component {
    render() {
        return (
            <div>
                <Modal.Body
                    className={'projectModalBody'}
                >
                    <div className={'closeButtonContainer'}>

                        <FontAwesomeIcon className={'modalCloseIcon'} icon={faTimes}
                                         onClick={this.props.hideProjectModal}/>

                    </div>

                    <Container>
                        <Row>
                            <Col>
                                <div className={'projectModalLeftHalf'}>
                                    <h1>{this.props.projectName} </h1>
                                    <div className={'divider'}/>

                                    <img src={this.props.projectImage} alt="" className="projectImage"/>


                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={'projectModalRightHalf'}>
                                    <div className={'modalTextContainer'}>

                                        <p>
                                            {this.props.projectDescription}
                                        </p>

                                        <p className={'technologiesUsedHeader'}><b> Technologies used include: </b></p>
                                        {this.props.technologiesUsed}
                                    </div>
                                    <div className={'modalLinkButtonsContainer'}>
                                        <a href={this.props.projectLink} target={'_blank'}>
                                            <Button
                                                className={'modalLinkButton'}
                                                variant="primary"
                                                onClick={this.props.hideProjectModal}
                                            >
                                                {this.props.projectLinkName}
                                                <FontAwesomeIcon className={'buttonIcon'} icon={faExternalLinkAlt}/>


                                            </Button>
                                        </a>

                                        {this.props.gitHubLink === null ? (null) : (

                                            <a href={this.props.gitHubLink} target={'_blank'}>
                                                <Button
                                                    className={'modalLinkButton'}
                                                    variant="primary"
                                                    onClick={this.props.hideProjectModal}>

                                                    GitHub <FontAwesomeIcon
                                                    // className={'buttonIcon'}

                                                    icon={faGithub}/>

                                                </Button>
                                            </a>


                                        )}

                                    </div>

                                </div>

                            </Col>


                        </Row>
                    </Container>

                </Modal.Body>


            </div>
        );
    }
}

ProjectModalContent.propTypes = {};

export default ProjectModalContent;
