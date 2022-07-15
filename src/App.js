import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Paper Sheets",
    amount: 58.11,
    date: new Date(2020, 7, 22),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 18.19,
    date: new Date(2021, 1, 30),
  },
  {
    id: "e3",
    title: "Notepad",
    amount: 108.9,
    date: new Date(2020, 5, 16),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
