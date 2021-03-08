import React from "react";

//Styling
import "../../style.css";
import "../../Modal.css";

//Function
const CupSize = () => {
    return (
        <div className="wrapper-details">
            <h5 className="text-center mt-4">Cup Size:</h5>
            <button className="cup-box">8oz</button>
            <button className="cup-box">12oz</button>
            <button className="cup-box">16oz</button>
        </div>
    );
};

export default CupSize;