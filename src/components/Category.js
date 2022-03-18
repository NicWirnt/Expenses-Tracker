import React from 'react'

export const Category = ({categoryList, handleOnChange}) => {
  return (
    <div>
          <select className="form-select" id="specificSizeSelect" onChange={handleOnChange}>
         <option default>Choose category</option>


             {categoryList.map((item,i) => {
        return(
              <option key={i} name="category" value={item}>{item}</option>
          )
      })}
      
      {/* <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option> */}
    </select>
    </div>
  )
}
