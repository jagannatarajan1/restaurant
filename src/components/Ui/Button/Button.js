import React from "react";
import Carticon from "../../Cart/carticon";
import "./Button.css";

const Button = (props) => {
  return (
    <button id="button" type="button" onClick={props.onClick}>
      <Carticon />
      {props.children}
      <span>0</span>
    </button>
  );
};

export default Button;
