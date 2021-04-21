import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseTitle = "Car insurance";
  const expenseAmount = 298;

  return (
    <div>
      <ExpenseDate date={props.date} />
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
