import React, { useContext } from "react";
import "./FormForMealList.css";
import CartContext from "../../../../../store/cart-context";

const FormForMealList = (props) => {
  const cartcontext = useContext(CartContext);

  const Addlistitems = (event) => {
    event.preventDefault();
    const quantity = event.target.form.Amount.value;
    cartcontext.addItem({ ...props.data, quantity: quantity });
  };

  return (
    <React.Fragment>
      <div className="full">
        <form className="Form">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            name="Amount"
            id="Amount"
            min="1"
            max="9"
            step="1"
            defaultValue="1"
          />
          <button type="button" onClick={Addlistitems}>
            +Add
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormForMealList;
