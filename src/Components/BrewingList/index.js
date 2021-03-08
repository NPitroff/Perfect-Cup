import React from "react";

const BrewingList = ({ brewingMethods }) => {
  const methodList = brewingMethods.map(method => (
    <div className="col-4">
      <h3>{method.name}</h3>
      <img src={method.imageUrl} alt={method.name} className="mx-auto" />
    </div>
  ));

  return <div className="row">{methodList}</div>;
};

export default BrewingList;