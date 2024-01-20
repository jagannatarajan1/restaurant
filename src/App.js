import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [showONScreen, setShowOnScreen] = useState(false);
  const displayCart = (props) => {
    setShowOnScreen(true);
  };
  const closeCart = (props) => {
    setShowOnScreen(false);
  };
  return (
    <CartProvider>
      {showONScreen && <Cart yourcartclose={closeCart} />}
      <Header yourcart={displayCart} />
    </CartProvider>
  );
}

export default App;
