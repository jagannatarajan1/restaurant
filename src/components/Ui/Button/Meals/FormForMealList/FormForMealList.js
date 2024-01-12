import React from "react";
import "./FormForMealList.css";
const FormForMealList = (props) => {
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
        </form>
        <button type="button">+Add</button>
      </div>
    </React.Fragment>
  );
};
export default FormForMealList;
