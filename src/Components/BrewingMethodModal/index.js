import React from "react";
//Components
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import BrewingMethodDetails from "../BrewingMethodDetails/index";
//Styling
import "../../style.css"
import "../../Modal.css"
// Render
const BrewingMethodModal = ({ brewingMethod, handleToggle, modalState }) => {
    return (
      <Modal size="lg" isOpen={modalState} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>{brewingMethod.name}</ModalHeader>
        <ModalBody>
            <BrewingMethodDetails brewingMethod={brewingMethod} />
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