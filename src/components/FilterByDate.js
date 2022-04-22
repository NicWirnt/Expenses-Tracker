import React from "react";

export const FilterByDate = ({ expense }) => {
  const handleOnChange = () => {};

  return (
    <div>
      <h2>Filter expenses by Date</h2>
      <input type="date" onChange="handleOnChange"></input>
    </div>
  );
};
