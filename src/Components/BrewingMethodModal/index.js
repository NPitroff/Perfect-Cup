import React from "react";

//Components
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import BrewingMethodDetails from "../BrewingMethodDetails/index";
import AmountCalculator from "../AmountCalculator/index";
import CupSize from "../CupSize/index";
import Timer from "../Timer/index";
import Instructions from "../Instructions/index";

//Styling
import "../../style.css"
import "../../Modal.css"

// Render
const BrewingMethodModal = ({ brewingMethod, handleToggle, modalState }) => {
    return (
      <Modal size="lg" isOpen={modalState} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>{brewingMethod.name}</ModalHeader>
        <ModalBody>
          <AmountCalculator brewingMethod={brewingMethod} />
          <Timer brewingMethod={brewingMethod} />
            {/* <BrewingMethodDetails brewingMethod={brewingMethod} /> */}
            <Instructions brewingMethod={brewingMethod} />
            <CupSize />
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