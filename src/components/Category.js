import React from 'react'

export const Category = ({categoryList, handleOnChange}) => {
  return (
    <div>
          <select name="category" className="form-select" id="specificSizeSelect" onChange={handleOnChange} >
            <option default>Choose category</option>


             {categoryList.map((item,i) => {
              return(
              <option  key={i} name="category" value={item}>{item}</option>
          )
      })}
    </select>
    </div>
  )
}
