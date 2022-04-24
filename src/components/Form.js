import React, { useState } from "react";
import { Category } from "./Category";
import { ExpenseTable } from "./ExpenseTable";

export const Form = ({ expense, addNewExpense }) => {
  const initialState = {
    item: "",
    cost: "",
    category: "",
    datePicker: "",
    category: "",
  };

  const [categoryList, setCategoryList] = useState([]);

  const [newExpense, setNewExpense] = useState(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    addNewExpense(newExpense);
    setNewExpense(initialState);
    console.log(expense);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
    console.log(newExpense);
    // console.log(name);
    // console.log(value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    setCategoryList([...categoryList, newExpense.category]);
    console.log(categoryList);
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  console.log(year, "year");
  console.log(month, "month");
  console.log(day, "date");

  return (
    <div>
      <form className="row gx-3 gy-2 align-items-center">
        <div className="newCategory col-md-8">
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Input New Category"
            id="newCategory"
            onChange={handleOnChange}
          />

          <div className="col-md-4">
            <button
              type="submit"
              className="btn btn-primary btnCategory"
              onClick={handleOnClick}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            name="item"
            id="inputItem"
            value={newExpense.item}
            placeholder="Item"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="form-control"
            name="cost"
            id="inputCost"
            placeholder="Cost"
            value={newExpense.cost}
            onChange={handleOnChange}
          />
          <input
            type="date"
            className="form-control"
            name="datePicker"
            id="datePicker"
            defaultValue={`${year}-${month > 9 ? "" : "0"}${month}-${day}`}
            // defaultValue="2022-03-20"
            value={newExpense.date}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-sm-3">
          {/* <input type="text" className="form-control" placeholder="Budget"></input>
           */}
        </div>
        <div className="col-sm-6">
          <Category
            categoryList={categoryList}
            handleOnChange={handleOnChange}
          />
        </div>

        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary btnSubmit"
            onClick={handleOnSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
