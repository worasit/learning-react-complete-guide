import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  console.log("Expenses was re-evaluated");

  const yearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filterExpenseItems = (selectedYear) =>
    props.items
      .filter(
        (item) =>
          new Date(item.date).getFullYear().toString() ===
          selectedYear.toString()
      )
      .map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onYearSelect={yearSelectHandler} />
      {filteredYear.toLocaleLowerCase() === "all"
        ? props.items.map((item, index) => {
            return (
              <ExpenseItem
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })
        : filterExpenseItems(filteredYear)}
    </Card>
  );
};

export default Expenses;
