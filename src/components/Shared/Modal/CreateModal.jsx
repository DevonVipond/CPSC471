import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap'
import './CreateModal.css'

function CreateModal(ContainedComponent) {

    return function CustomModal(props) {
        return (
            <Modal
                {...props}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add a new job application
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContainedComponent/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CreateModal
