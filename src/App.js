import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/cart";

function App() {
  const [showONScreen, setShowOnScreen] = useState(false);
  const displayCart = (props) => {
    setShowOnScreen(true);
  };
  const closeCart = (props) => {
    setShowOnScreen(false);
  };
  return (
    <React.Fragment>
      {showONScreen && <Cart yourcartclose={closeCart} />}
      <Header yourcart={displayCart} />
    </React.Fragment>
  );
}

export default App;
