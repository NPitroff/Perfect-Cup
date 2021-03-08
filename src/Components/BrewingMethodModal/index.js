import React from "react";
//Components
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//Styling
import "../../style.css"
import "../../Modal.css"

const BrewingMethodModal = ({ brewingMethod, handleToggle, modalState }) => {
    return (
      <Modal size="lg" isOpen={modalState} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>{brewingMethod.name}</ModalHeader>
        <ModalBody>
            <div className="wrapper-details">
                <div className="modal-box">
                    <div>Grind Size: </div> <br />
                    <div>{brewingMethod.grind_size}</div>
                </div>
                <div className="modal-box">
                    <div>Brew Time:</div> <br />
                    <div> {brewingMethod.total_time} minutes </div>
                </div>
                <div className="modal-box">
                    <div>Water:</div> <br />
                    <div> {brewingMethod.default_water}ml</div>
                </div>
            </div>
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