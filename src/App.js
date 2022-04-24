import { useState } from "react";
import "./App.css";
import { ExpenseTable } from "./components/ExpenseTable";
import { FilterByDate } from "./components/FilterByDate";
import { Form } from "./components/Form";

function App() {
  const [expense, setExpense] = useState([]);
  const [showAll, setShowAll] = useState();
  const [filteredDate, setFilteredDate] = useState();
  const [filteredExpense, setFilteredExpense] = useState();

  const addNewExpense = (item) => {
    setExpense([...expense, item]);
  };

  const handleOnFilter = (e) => {
    const date = e.target.value;
    setFilteredDate(date);
    console.log(filteredDate);
  };

  const handleOnShowAll = () => {};

  const expenseToDisplay = expense
    ? expense.filter((d) => d.datePicker === filteredDate)
    : expense;

  return (
    <div className="">
      <Form expense={expense} addNewExpense={addNewExpense} />
      <FilterByDate expense={expense} handleOnFilter={handleOnFilter} />
      <ExpenseTable expense={expense} />
    </div>
  );
}

export default App;
