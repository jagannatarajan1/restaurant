import React, { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [items, updateitem] = useState([]);
  const addItemToCartHandler = (item) => {
    updateitem([...items, item]);
    console.log(cartContext);
  };

  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
