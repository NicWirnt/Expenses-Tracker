import React from "react";

export const ExpenseTable = ({ expense }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cost</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {console.log(expense)}
        <tbody>
          {expense.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.item}</td>
                <td>{item.cost}</td>
                <td>{item.category}</td>
                <td>{item.datePicker}</td>
                <td>
                  <button>
                    <i className="fas fa-eraser"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
