import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../Css/ProjectDetails.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import image from '../../portfolioTestPictures/greendly.png'
import ContainerCard from "../ContainerCard";

class Project5Details extends Component {
    render() {
        return (
            <Modal show={this.props.activeProject === 5 ? (true) : (false)}
                   className={'projectDetailsContainer' + ' ' + `${this.props.showProjectDetails ? ('projectDetailsActive') : ('projectDetailsInactive')}`}
                   onHide={this.props.closeProjectDetails}
            >


                <Modal.Body closeButton>
                   <div className={'projectDetailsInfo'}>


                        <h1 className={'projectDetailsTitle'}>Greendly.co</h1>

                        <img className={'projectDetailsImage'} src={image}/>


                        <p>
                           Online Shop for Greendly, a brand that sells eco-friendly and sustainable lifestyle products.

                        </p>

                        <p><b> Technologies I used for this project include:</b> </p>
                        <p className={'technologyListItem'}> - Shopify </p>
                        <p className={'technologyListItem'}> - HTML </p>
                        <p className={'technologyListItem'}> - CSS </p>
                        <Button onClick={this.props.closeProjectDetails}>Back</Button>
                    </div>

                </Modal.Body>

            </Modal>

        );
    }
}

Project5Details.propTypes = {};



export default Project5Details;
