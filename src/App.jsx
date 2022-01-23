import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  console.log("App re-evaluated");
  const initialExpenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 29),
    },
    {
      id: 2,
      title: "Breakfast",
      amount: 450.21,
      date: new Date(2021, 2, 10),
    },
    {
      id: 3,
      title: "Twin Bed",
      amount: 199.93,
      date: new Date(2021, 2, 13),
    },
    {
      id: 4,
      title: "Dinner",
      amount: 60.23,
      date: new Date(2021, 2, 20),
    },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses([...expenses, expense]);
    console.log("set expenses was called");
  };
  return (
    <div>
      <h1>Let's get started</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
