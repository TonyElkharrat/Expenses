import React from "react";
import PropTypes from "prop-types";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { digit: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      {month}
      {year}
      {day}
    </div>
  );
};

export default ExpenseDate;
