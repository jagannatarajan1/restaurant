import React from "react";
import Button from "../Ui/Button/Button";
import "./Header.css";
import mealsimage from "../../assets/meals.jpg";
import Mealslist from "../Ui/Button/Meals/Mealslist";
const Header = () => {
  return (
    <React.Fragment>
      <div className="Headerdiv">
        <h1>ReactMeals</h1>
        <Button>your Cart</Button>
      </div>
      {/* eslint-disable-next-line */}
      <img src={mealsimage} alt="this is beautiful meals image" />
      <div className="headerparagraph">
        <p>
          <h2>Delicious Food,Delivered To You</h2>
          choose your favorite meal from our braod selection of availabe meals
          and enjoy a delicious lunch or dinner at home
          <br />
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
      <Mealslist></Mealslist>
    </React.Fragment>
  );
};
export default Header;
