import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const { items } = props;
  return (
    <div className="expenses">
      {items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
