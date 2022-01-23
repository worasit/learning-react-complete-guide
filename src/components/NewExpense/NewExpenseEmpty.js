import React, { useState } from "react";
import "./ExpenseForm.css";

const NewExpenseEmpty = (props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(props.isFormDisplay);
  const expandFormHandler = () => {
    setIsFormDisplayed((prevState) => !prevState);
    props.onAddExpenseClicked(isFormDisplayed);
  };

  return (
    <button className="new-expense__actions" onClick={expandFormHandler}>
      Add Expense
    </button>
  );
};

export default NewExpenseEmpty;
