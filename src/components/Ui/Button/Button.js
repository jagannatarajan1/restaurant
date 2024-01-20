import React, { useContext } from "react";
import Carticon from "../../Cart/carticon";
import "./Button.css";
import CartContext from "../../../store/cart-context";

const Button = (props) => {
  const cartcontext = useContext(CartContext);
  let quantity = 0;

  cartcontext.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <button id="button" type="button" onClick={props.onClick}>
      <Carticon />
      {props.children}
      <span>{quantity}</span>
    </button>
  );
};

export default Button;
