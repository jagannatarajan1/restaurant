import React from "react";
import Carticon from "../../Cart/carticon";
import "./Button.css";
const Button = (props) => {
  return (
    <React.Fragment>
      <button id="button" type={props.type || "button"}>
        <Carticon></Carticon> {props.children} <span>0</span>
      </button>
    </React.Fragment>
  );
};
export default Button;
