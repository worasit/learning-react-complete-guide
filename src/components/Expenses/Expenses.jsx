import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const ALL = "all";
const EMPTY_EXPENSE = <p>No Expenses found!</p>;
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  console.log("Expenses was re-evaluated");

  const yearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const renderExpenseItems = (items) =>
    items.map((item, index) => {
      return (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });

  const filterExpenseItems = (selectedYear) => {
    const filteredExpenses = props.items.filter(
      (item) =>
        new Date(item.date).getFullYear().toString() === selectedYear.toString()
    );

    if (filteredExpenses.length === 0) {
      return EMPTY_EXPENSE;
    } else {
      return renderExpenseItems(filteredExpenses);
    }
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onYearSelect={yearSelectHandler} />
      {filteredYear.toLocaleLowerCase() === ALL
        ? renderExpenseItems(props.items)
        : filterExpenseItems(filteredYear)}
    </Card>
  );
};

export default Expenses;
