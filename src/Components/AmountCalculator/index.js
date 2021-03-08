import React from "react";

//Components
import Slider from "@material-ui/core/Slider";

//Styling
import "../../style.css";

const AmountCalculator = () => {
    const marks = [
      {
        value: 12,
        label: "12"
      },
      {
        value: 13,
        label: "13"
      },
      {
        value: 14,
        label: "14"
      },
      {
        value: 15,
        label: "15"
      }
    ];

    const handleRatio = value => {
        return JSON.stringify(value);
    };

    return (
        <div className="wrapper-details-input">
            <div>
                <h5 className="text-center">Coffee to Water Ratio: </h5>
            </div>
            <div>
                <h6 className="text-center">stronger</h6>
            </div>
            <Slider 
            orientation="horizontal"
            defaultValue={15}
            min={12}
            max={15}
            getAriaValueText={handleRatio}
            step={1}
            marks={marks}
            valueLabelDisplay="on"
            style={{
                width:"200px",
                color:"#8cb9fd"
            }}
            />
            <div>
                <h6 className="text-center">lighter</h6>
            </div>
        </div>
    );
        };
        export default AmountCalculator;