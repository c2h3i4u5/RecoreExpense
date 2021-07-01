import Expenses from "./components/Expenses/Expense.js";
import ExpenseForm from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //get data from NewExpense.js use onAddExpense={addExpenseHandler}

    console.log(expense);
    setExpenses((preExpenses) => {
      //preExpenses equal expenses
      return [expense, ...preExpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler}></ExpenseForm>

      <Expenses items={expenses}></Expenses>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h2",
  //     "Let's get started",
  //     React.createElement(Expenses, { items: expenses })
  //   )
  // );
};

export default App;
