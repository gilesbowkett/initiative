import React from 'react'
import { connect } from 'react-redux'
import { del } from './actions'

const InitiativeRow = ({ del, character: { name, roll } }) => {
  const clickDel = (name) => (
    () => del(name)
  )

  return (
    <div className="row">
      <div className="column">
        <label>Name</label>
        <div>{name}</div>
      </div>

      <div className="column">
        <label>Roll</label>
        <div>{roll}</div>

        <div>
          <button className="delete" onClick={clickDel(name)}>✗</button>
        </div>
      </div>
    </div>
  )
}

export default connect(s => s, { del })(InitiativeRow)
