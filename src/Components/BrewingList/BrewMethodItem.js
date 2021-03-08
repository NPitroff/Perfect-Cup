import React from "react";

// Styling
import "../../style.css";

const BrewMethodItem = ({ brewingMethod }) => {
  return (
    <div>
      <h3 className="font-weight-medium text-center text-lg-left mt-4 mb-0">
        {brewingMethod.name}
      </h3>
      <hr className="mt-2 mb-5" />
      <div className="row text-center text-lg-left">
        <div className="box">
          <img
            className="img-fluid img-thumbnail"
            src={brewingMethod.imageUrl}
            alt={brewingMethod.name}
            style={{ height: 160, width: 170 }}
          />
          <div>
            <button className="btn">Brew</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrewMethodItem;