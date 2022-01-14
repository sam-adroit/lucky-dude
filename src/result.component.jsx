import React from "react";
import { luckItems } from "./luckItems";
import Button from "./button.component";

import "./result.style.css";

const Result = ({showLuckDisplay}) => {
    const luck = luckItems[Math.floor(Math.random() * luckItems.length)]
    return (
        <div className="container">
            <h1>Your luck got:</h1>
            <div className="result-display">
                <div className={`result-item ${luck.bgColor}`}>
                    <h2>{luck.item}</h2>
                </div>
            </div>
            <Button name="Try again!" display={showLuckDisplay} />
        </div>
    )
}

export default Result;