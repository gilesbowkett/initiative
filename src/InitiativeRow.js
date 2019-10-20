import React from 'react'
import { connect } from 'react-redux'
import { del } from './actions'

const InitiativeRow = ({ del, character: { name, roll } }) => {
  const clickDel = () => (
    del(name)
  )

  return (
    <div className="quasi-table">
      <div className="row">
        <label>Name</label>
        <div>{name}</div>
      </div>

      <div className="row">
        <label>Roll</label>
        <div>{roll}</div>

        <div>
          <button className="delete" onClick={clickDel}>✗</button>
        </div>
      </div>
    </div>
  )
}

export default connect(s => s, { del })(InitiativeRow)
