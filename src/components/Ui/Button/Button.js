import React, { useContext } from "react";
import Carticon from "../../Cart/carticon";
import "./Button.css";
import CartContext from "../../../store/cart-context";

const Button = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  console.log(cartCtx);
  return (
    <button id="button" type="button" onClick={props.onClick}>
      <Carticon />
      {props.children}
      <span>{numberOfCartItems}</span>
    </button>
  );
};

export default Button;
