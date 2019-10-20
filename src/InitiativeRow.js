import React from 'react'

const InitiativeRow = ({ name, del, roll }) => (
  <div className="row">
    <div className="column">
      <label>Name</label>
      <div>{name}</div>
    </div>

    <div className="column">
      <label>Roll</label>
      <div>{roll}</div>

      <div>
        <button className="delete" onClick={del(name)}>✗</button>
      </div>
    </div>
  </div>
)

export default InitiativeRow
