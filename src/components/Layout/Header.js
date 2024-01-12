import React from "react";
import Button from "../Ui/Button/Button";
import "./Header.css";
import mealsimage from "../../assets/meals.jpg";
import Mealslist from "../Ui/Button/Meals/Mealslist";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="Headerdiv">
        <h1>ReactMeals</h1>
        <Button onClick={props.yourcart}>Your Cart</Button>
      </div>
      {/* eslint-disable-next-line */}
      <img src={mealsimage} alt="this is a beautiful meals image" />
      <div className="headerparagraph">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time,
          and of course, by experienced chefs!
        </p>
      </div>
      <Mealslist />
    </React.Fragment>
  );
};

export default Header;
