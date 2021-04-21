import React from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amout}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amout}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amout}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[4].title}
        date={props.expenses[4].date}
        amount={props.expenses[4].amout}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[5].title}
        date={props.expenses[5].date}
        amount={props.expenses[5].amout}
      ></ExpenseItem>
    </div>
  );
};

Expenses.propTypes = {};

export default Expenses;
