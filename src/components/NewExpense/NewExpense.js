import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";

import ExpenseForm from "./ExpenseForm";
import NewExpenseEmpty from "./NewExpenseEmpty";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addExpensedClickedHandler = () => {
    setIsEditing(true);
  };

  const cancelClickedHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <NewExpenseEmpty onAddExpenseClicked={addExpensedClickedHandler} />
      )}
      {isEditing && (
        <ExpenseForm
          onCancelClicked={cancelClickedHandler}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
