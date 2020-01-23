import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../Css/ProjectDetails.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import image1 from '../../portfolioTestPictures/2.jpg'
import ContainerCard from "../ContainerCard";

class Project1Details extends Component {
    render() {
        return (
            <Modal show={this.props.activeProject === 1 ? (true) : (false)}
                   className={'projectDetailsContainer' + ' ' + `${this.props.showProjectDetails ? ('projectDetailsActive') : ('projectDetailsInactive')}`}
                   onHide={this.props.closeProjectDetails}
            >


                <Modal.Body closeButton>
                    <div className={'projectDetailsInfo'}>


                        <h1 className={'projectDetailsTitle'}>Name of Project1</h1>

                        <img className={'projectDetailsImage'}  src={{image1}}/>


                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                        <Button onClick={this.props.closeProjectDetails}>Back</Button>
                    </div>

                </Modal.Body>

            </Modal>

        );
    }
}

Project1Details.propTypes = {};



export default Project1Details;
