import React, {Component} from 'react';
import PropTypes from 'prop-types';
import image1 from '../portfolioTestPictures/refillrTestPhoto.png';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import ProjectDetails1 from './ProjectDetails1';
import ProjectDetails2 from './ProjectDetails2';
import ProjectDetails3 from './ProjectDetails3';
import ProjectDetails4 from './ProjectDetails4';

class ProjectOverlay extends Component {
    render() {
        let activeProject = this.props.overLayActive;
        let projectChoice
        if (activeProject === 1) {
            projectChoice = <ProjectDetails1 overLayClose={this.props.overLayClose}/>;
        } else if (activeProject === 2) {
            projectChoice = <ProjectDetails2 overLayClose={this.props.overLayClose}/>;

        } else if (activeProject === 3) {
            projectChoice = <ProjectDetails3 overLayClose={this.props.overLayClose}/>;

        } else if (activeProject === 4) {
            projectChoice = <ProjectDetails4 overLayClose={this.props.overLayClose}/>;

        }

        return (
            <div className={'projectDetailsOverlay' + ' ' + `${this.props.showProject === true ? ('projectDetailsOverlayActive') : ('')}`}>
                {projectChoice}
            </div>
        );
    }
}

ProjectOverlay.propTypes = {};

export default ProjectOverlay;