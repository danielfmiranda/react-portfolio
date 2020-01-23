import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../Css/ProjectDetails.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import image1 from '../../portfolioTestPictures/2.jpg'
import ContainerCard from "../ContainerCard";
import image from "../../portfolioTestPictures/refillrTestPhoto.png";

class Project3Details extends Component {
    render() {
        return (
            <Modal show={this.props.activeProject === 3 ? (true) : (false)}
                   className={'projectDetailsContainer' + ' ' + `${this.props.showProjectDetails ? ('projectDetailsActive') : ('projectDetailsInactive')}`}
                   onHide={this.props.closeProjectDetails}
            >


                <Modal.Body closeButton>
                    <div className={'projectDetailsInfo'}>


                        <h1 className={'projectDetailsTitle'}>Refillr</h1>

                        <img className={'projectDetailsImage'} src={image}/>


                        <p>
                            Locator App showing users the location of water fountains near them to refill their reusable
                            water bottles. Users can also
                            add a new location from their phone.
                        </p>

                        <p><b> Technologies I used for this project include:</b></p>
                        <p className={'technologyListItem'}> - React.js </p>
                        <p className={'technologyListItem'}> - React Bootstrap </p>
                        <p className={'technologyListItem'}> - Django REST </p>
                        <p className={'technologyListItem'}> - Google Maps API </p>



                        <Button onClick={this.props.closeProjectDetails}>Back</Button>
                    </div>

                </Modal.Body>

            </Modal>

        );
    }
}

Project3Details.propTypes = {};


export default Project3Details;
