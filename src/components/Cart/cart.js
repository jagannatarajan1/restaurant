import Modal from "../Ui/Modal";
import "./Cart.css";
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartcontext = useContext(CartContext);
  const cartItems = (
    <ul className="cart-item">
      {cartcontext.items.map((item) => (
        <li key={item.id}>
          {item.Name} {item.quantity} {item.Price}
        </li>
      ))}
    </ul>
  );
  return (
    <React.Fragment>
      <Modal yourcartclose={props.yourcartclose}>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{cartcontext.totalAmount}</span>
        </div>
        <div className="actions ">
          <button className="button--alt " onClick={props.yourcartclose}>
            Close
          </button>
          <button className="button">Order</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
export default Cart;
