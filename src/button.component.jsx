import React from "react";
import "./button.css"

const Button = ({name, display}) => (
    <button className="btn" onClick={display}>{name}</button>
)

export default Button;
