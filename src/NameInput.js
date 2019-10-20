import React from 'react'

const NameInput = ({ enter, roll, clearAll }) => (
  <div className="row">
    <div className="column">
      <label>Name</label>
      <input type="text" id="name" onKeyUp={enter}/>
    </div>

    <div className="column">
      <label>Roll</label>
      <button className="roll" onClick={roll}>Roll</button>
      <button className="clear-all" onClick={clearAll}>clear all</button>
    </div>
  </div>
)

export default NameInput

