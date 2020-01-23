import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../Css/ProjectDetails.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import image1 from '../../portfolioTestPictures/socialCompile.png'
import ContainerCard from "../ContainerCard";

class Project6Details extends Component {
    render() {
        return (
            <Modal show={this.props.activeProject === 6 ? (true) : (false)}
                   className={'projectDetailsContainer' + ' ' + `${this.props.showProjectDetails ? ('projectDetailsActive') : ('projectDetailsInactive')}`}
                   onHide={this.props.closeProjectDetails}
            >


                <Modal.Body closeButton>
                    <div className={'projectDetailsInfo'}>


                        <h1 className={'projectDetailsTitle'}>SocialCompile.com</h1>

                        <img className={'projectDetailsImage'} src={image1}/>


                        <p>
                            Landing site for Social Compile, a upcoming platform to bring together travel influencers
                            and advertisers in one of the fastest growing social media niches online.


                        </p>

                        <p><b> Technologies I used for this project include:</b> </p>
                        <p className={'technologyListItem'}> - Wordpress </p>
                        <p className={'technologyListItem'}> - HTML </p>
                        <p className={'technologyListItem'}> - CSS </p>
                        <Button onClick={this.props.closeProjectDetails}>Back</Button>
                    </div>

                </Modal.Body>

            </Modal>

        );
    }
}

Project6Details.propTypes = {};


export default Project6Details;
