import React, { useState } from "react";
import "./App.css";
{showHome ? (<BrewingList brewingMethods={brewingMethods} />) : (<AboutPage />)}

import allBrewMethods from "./data";

function App() {
  const [brewingMethods] = useState(allBrewMethods);

  const methodList = brewingMethods.map(method => (
    
    <div className="col-4">
      <h3>{method.name}</h3>
      <img src={method.imageUrl} alt={method.name} className="mx-auto" />
    </div>
  ));

  return (
    <div className="App my-5">
      <div className="container">
        <div className="row">{methodList}</div>
      </div>
    </div>
  );
}

export default App;
