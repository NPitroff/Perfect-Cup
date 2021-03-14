import React, { useState, useEffect } from "react";

// the import to bring in the Howler dependency package
import {Howl, Howler} from "howler";


//Styling
import "../../timer.css";
import "../../style.css";

const Timer = ({ brewingMethod }) => {
  //function to create a sound when the timer ends

  // states
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  //   state to store the current time
  const [currentTime, setTime] = useState(0);

  const [isActive, setIsActive] = useState(false);

//   variables to split the time for coffee brew in our data.js file
    const propSeconds = brewingMethod.total_time.substring(
        brewingMethod.total_time.indexOf(":") + 1
    );
    const propMinutes = brewingMethod.total_time.substring(
        0,
        brewingMethod.total_time.indexOf(":")
    );
    
// function to reset the timer
  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  };

  //function to check whether the timer is done and then reset
  const checkTime = () => {
    if (propMinutes === minutes && propSeconds === seconds) {
        alert("Coffee Is Ready!");
        setIsActive(!isActive);
    }
};

//   react hook to detect whenever isActive is true, and starts the timer
useEffect(() => {
    let interval = null;
    if (isActive) {
        checkTime();
        const startTime = Date.now() - currentTime;
        interval = setInterval(() => {
            setTime(Date.now() - startTime);
            setSeconds(("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2));
            setMinutes(("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2));
        }, 1000);
    } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isActive, seconds, minutes ]);

  return (
    <div className="app">
      <div className="time">
        {minutes}mins:{seconds}s
      </div>
      <div className="row">
        <button
          className={`button button-primary button-secondary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button btn-danger" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
