import React from "react";
import "./Mealslist.css";
import Card from "../../../Layout/Card";
const Mealslist = (props) => {
  const Dummydata = [
    {
      Id: "1",
      Name: "Dosa",
      Description: "This is the best dosa in the entire country",
      Price: "45 rs",
    },
    {
      Id: "2",
      Name: "Idli",
      Description: "This is the best Idli in the entire country",
      Price: "15 rs",
    },
    {
      Id: "3",
      Name: "Vada",
      Description: "This is the best Vada in the entire country",
      Price: "10 rs",
    },
    {
      Id: "4",
      Name: "Sambar",
      Description: "This is the best Sambar in the entire country",
      Price: "20 rs",
    },
  ];
  let MealsItems = Dummydata.map((item) => (
    <ul className="meal">
      <h3>{item.Name}</h3>
      <h4 className="description">{item.Description}</h4>
      <h3 className="price">{item.Price}</h3>
    </ul>
  ));

  return (
    <React.Fragment>
      <Card> {MealsItems}</Card>
    </React.Fragment>
  );
};
export default Mealslist;
