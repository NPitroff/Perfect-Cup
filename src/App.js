import React, { useState } from "react";

//Style
import "./App.css";

//Data
import allBrewMethods from "./data";

//Components
import BrewingList from "./Components/BrewingList/index.js";
import AboutPage from "./Components/AboutPage";
import NavBar from "./Components/NavBar";

function App() {
  const [brewingMethods] = useState(allBrewMethods);
  const [showHome, setShowHome] = useState(true);
  // Display the brewing methods for the coffee
  const methodList = brewingMethods.map((method) => (
    <div className="col-4" key={method.name}>
      <h3>{method.name}</h3>
      <img src={method.imageUrl} alt={method.name} className="mx-auto" />
    </div>
  ));

  return (
    <div className="App my-5">
      <div className="container">
      </div>
      <NavBar setShowHome={setShowHome} />
      <div className="App my-5">
        {showHome ? (
          <BrewingList brewingMethods={brewingMethods} />
        ) : (
          <AboutPage />
        )}
      </div>
    </div>
  );
}

export default App;
