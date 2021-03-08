import React from "react";

//Styling
import "../../style.css";

const BrewingMethodDetails = ({ brewingMethod }) => {
    return (
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
    );
};