import React, { useState, useRef } from "react";
import "./FormForMealList.css";

const FormForMealList = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 9
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <React.Fragment>
      <div className="full">
        <form className="Form">
          <label htmlFor="Amount">Amount</label>
          <input
            ref={amountInputRef}
            type="number"
            name="Amount"
            id="Amount"
            min="1"
            max="8"
            step="1"
            defaultValue="1"
          />
          <button type="button" onClick={submitHandler}>
            +Add
          </button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormForMealList;
