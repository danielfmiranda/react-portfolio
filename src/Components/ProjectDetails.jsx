import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/ProjectDetails.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class ProjectDetails extends Component {
    render() {
        return (
                <Modal show={false} className={'projectDetailsContainer' + ' ' + `${this.props.showProjectDetails ? ('projectDetailsActive') : ( 'projectDetailsInactive' )}`}>

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button >Close</Button>
      </Modal.Footer>
    </Modal>

        );
    }
}


export default ProjectDetails;
