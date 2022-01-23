import React, { useState } from "react";
import "./ExpenseForm.css";

const NewExpenseEmpty = (props) => {
  const expandFormHandler = () => {
    props.onAddExpenseClicked();
  };

  return (
    <button className="new-expense__actions" onClick={expandFormHandler}>
      Add Expense
    </button>
  );
};

export default NewExpenseEmpty;
