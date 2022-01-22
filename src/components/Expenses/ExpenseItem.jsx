import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toString()}</div>
      </div>
      <button onClick={(event) => console.log("Button Clicked!")}>
        Change a title
      </button>
    </Card>
  );
};

export default ExpenseItem;
