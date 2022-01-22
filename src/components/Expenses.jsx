import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const { expenses } = props;
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
