import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { title, amount, date } = props;
  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toString()}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
