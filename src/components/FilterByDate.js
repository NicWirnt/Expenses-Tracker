import React, { useState } from "react";

export const FilterByDate = ({ expense, handleOnFilter }) => {
  return (
    <div>
      <h2>Filter expenses by Date</h2>
      <input className="col-md-6" type="date" onChange={handleOnFilter}></input>
      <button className="col-md-6">Show all</button>
    </div>
  );
};
