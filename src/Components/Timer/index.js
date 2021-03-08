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
            <div className="time">
            {minutes}mins:{seconds}s
            </div>
            <div className="row">
                <button className={`button button-primary button-secondary-${isActive ? "active" : "inactive"
                }`}
                onClick={() => setIsActive(!isActive)}
                >
                    {isActive ? "Pause" : "Start"}
                    </button>
                <button className="button btn-danger">Reset</button>
            </div>
        </div>
    );
};

export default Timer;