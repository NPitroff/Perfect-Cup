import React from "react";

//Styling
import "../../timer.css";

const Timer = () => {
    // states
    const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
    return (
        <div className="app">
            <div className="time">s</div>
            <div className="row">
                <button className="button-primary">Start</button>
                <button className="button-secondary">Reset</button>
            </div>
        </div>
    );
};

export default Timer;