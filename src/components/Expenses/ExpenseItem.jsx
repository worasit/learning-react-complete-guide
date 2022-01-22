import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let { amount, date } = props;
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React.");

  const onClickHandler = () => {
    setTitle("Updated!");
    console.log(title);
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
