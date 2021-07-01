import "./Expense.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import React, { useState } from "react";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    //get select value from ExpensesFilter.js
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expense;