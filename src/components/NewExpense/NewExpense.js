import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";

import ExpenseForm from "./ExpenseForm";
import NewExpenseEmpty from "./NewExpenseEmpty";

const NewExpense = (props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addExpensedClickedHandler = (isFormDisplayed) => {
    setIsFormDisplayed(!isFormDisplayed);
  };

  const cancelClickedHandler = (isCanceled) => {
    console.log("cancelClickedHandler is executed");
    setIsFormDisplayed(isCanceled);
  };

  return (
    <div className="new-expense">
      {isFormDisplayed ? (
        <ExpenseForm
          isFormDisplay={isFormDisplayed}
          onCancelClicked={cancelClickedHandler}
          onSaveExpense={saveExpenseHandler}
        />
      ) : (
        <NewExpenseEmpty
          isFormDisplay={isFormDisplayed}
          onAddExpenseClicked={addExpensedClickedHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
