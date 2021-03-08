import React from "react";

//Components
import BrewMethodItem from "./BrewMethodItem";

//Styling
import "../../style.css";

const BrewingList = ({ brewingMethods }) => {
  const methodList = brewingMethods.map(method => (
    <div className="col-4">
      <BrewMethodItem brewingMethod={method} />
      <img src={method.imageUrl} alt={method.name} className="mx-auto" />
    </div>
  ));

  return <div className="row">{methodList}</div>;
};

export default BrewingList;