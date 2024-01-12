import Modal from "../Ui/Modal";
import "./Cart.css";
import React from "react";
const Cart = (props) => {
  const cartItems = (
    <ul className="cart-item">
      {[{ id: "s1", name: "noodles", amount: 2, price: 44 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <React.Fragment>
      <Modal>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>55</span>
        </div>
        <div className="actions ">
          <button className="button--alt ">Close</button>
          <button className="button">Order</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
export default Cart;
