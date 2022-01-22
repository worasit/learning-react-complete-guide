import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let { title, amount, date } = props;

  const onClickHandler = () => {
    title = "Updated!";
    console.log("Button Clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toString()}</div>
      </div>
      <button onClick={onClickHandler}>Change a title</button>
    </Card>
  );
};

export default ExpenseItem;
