import React from "react";
//Components
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//Styling
import "../../Modal.css"

const BrewingMethodModal = ({ handleToggle, modalState }) => {
    return (
      <Modal size="lg" isOpen={modalState} toggle={handleToggle} backdrop="false">
        <ModalHeader toggle={handleToggle}></ModalHeader>
        <ModalBody>
        </ModalBody>
        <ModalFooter>
          <button className="button button-dark" onClick={handleToggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  };
  export default BrewingMethodModal;