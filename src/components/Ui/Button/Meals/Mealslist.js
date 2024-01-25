import React, { useContext } from "react";
import "./Mealslist.css";
import Card from "../../../Layout/Card";
import CartContext from "../../../../store/cart-context";
import FormForMealList from "./FormForMealList/FormForMealList";

const Mealslist = (props) => {
  const cartCtx = useContext(CartContext);
  const Dummydata = [
    {
      id: "1",
      name: "Dosa",
      description: "This is the best dosa in the entire country",
      price: "45",
    },
    {
      id: "2",
      name: "Idli",
      description: "This is the best Idli in the entire country",
      price: "15",
    },
    {
      id: "3",
      name: "Vada",
      description: "This is the best Vada in the entire country",
      price: "10",
    },
    {
      id: "4",
      name: "Sambar",
      description: "This is the best Sambar in the entire country",
      price: "20",
    },
  ];
  const quantityHandler = (amount, item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: amount,
      price: item.price,
    });
  };

  let MealsItems = Dummydata.map((item) => (
    <ul className="meal" key={item.id}>
      <h3>{item.name}</h3>
      <h4 className="description">{item.description}</h4>
      <h3 className="price">{item.price} rs</h3>
      <FormForMealList
        data={item}
        onAddToCart={(amount) => quantityHandler(amount, item)}
      ></FormForMealList>
    </ul>
  ));

  return (
    <React.Fragment>
      <Card> {MealsItems}</Card>
    </React.Fragment>
  );
};

export default Mealslist;
