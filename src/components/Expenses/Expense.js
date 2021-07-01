import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList.js";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    //get select value from ExpensesFilter.js
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}
export default Expense;
