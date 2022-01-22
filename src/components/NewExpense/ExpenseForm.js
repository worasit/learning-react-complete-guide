import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Using multiple state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Using one state
  // const [enteredInput, setEnteredInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredTitle: event.target.value,
    // });
    // setEnteredInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value,
    // }));
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: event.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredDate: event.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    // Prevent form submission to server and reload the whole page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
