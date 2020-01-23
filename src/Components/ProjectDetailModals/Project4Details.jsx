import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../Css/ProjectDetails.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import image1 from '../../portfolioTestPictures/2.jpg'
import ContainerCard from "../ContainerCard";
import image from "../../portfolioTestPictures/timelyCover.jpeg";

class Project4Details extends Component {
    render() {
        return (
            <Modal show={this.props.activeProject === 4 ? (true) : (false)}
                   className={'projectDetailsContainer' + ' ' + `${this.props.showProjectDetails ? ('projectDetailsActive') : ('projectDetailsInactive')}`}
                   onHide={this.props.closeProjectDetails}
            >


                <Modal.Body closeButton>
                    <div className={'projectDetailsInfo'}>


                        <h1 className={'projectDetailsTitle'}>Timely</h1>

                        <img className={'projectDetailsImage'} src={image}/>


                        <p>
                            Employee clock in system, keeps track of time clocked in, clocked out, hours worked, and
                            managers can
                            see if team members were late or make changes by using administrator panel.
                        </p>

                        <p><b> Technologies I used for this project include:</b></p>
                        <p className={'technologyListItem'}> - React.js </p>
                        <p className={'technologyListItem'}> - Django REST </p>
                        <p className={'technologyListItem'}> - Bootstrap </p>
                        <p className={'technologyListItem'}> - CSS </p>

                        <Button onClick={this.props.closeProjectDetails}>Back</Button>
                    </div>

                </Modal.Body>

            </Modal>

        );
    }
}

Project4Details.propTypes = {};


export default Project4Details;
