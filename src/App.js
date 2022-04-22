import { useState } from "react";
import "./App.css";
import { ExpenseTable } from "./components/ExpenseTable";
import { FilterByDate } from "./components/FilterByDate";
import { Form } from "./components/Form";

function App() {
  const [expense, setExpense] = useState([]);
  const [showAll, setShowAll] = useState();
  const addNewExpense = (item) => {
    setExpense([...expense, item]);
  };

  return (
    <div className="">
      <Form expense={expense} addNewExpense={addNewExpense} />
      <FilterByDate expense={expense} />
      <ExpenseTable expense={expense} />
    </div>
  );
}

export default App;
