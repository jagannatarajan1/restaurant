import React from "react";
import Button from "../Ui/Button/Button";
import "./Header.css";
const Header = () => {
  return (
    <React.Fragment>
      <div className="Headerdiv">
        <h1>ReactMeals</h1>
        <Button>your Cart</Button>
      </div>
    </React.Fragment>
  );
};
export default Header;
