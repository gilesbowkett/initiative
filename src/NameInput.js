import React from 'react'
import { connect } from 'react-redux'
import Modifier from './Modifier'
import { clearAll, del, manualRoll, roll } from './actions'

const NameInput = ({ clearAll, del, manualRoll, roll }) => {
  const refocus = () => {
    document.querySelector("#name").value = ''
    document.querySelector("#manual").value = ''
    document.querySelector("#name").focus()
  }

  const clickClear = () => {
    refocus()
    clearAll()
  }

  const clickRoll = () => {
    const name = document.querySelector("#name").value
    const manuallyRolledAmount = document.querySelector("#manual").value // FIXME: too jQuery?

    // FIXME: crude
    if ('' !== name && !/^\s*$/g.test(name)) {
      if ('' === manuallyRolledAmount || /^\s*$/g.test(manuallyRolledAmount)) {
        refocus()
        roll(name)
      } else {
        refocus()
        manualRoll(name, manuallyRolledAmount)
      }
    }
  }

  const enter = (event) => {
    if (event.key === "Enter") {
      clickRoll()
    }   
  }

  // FIXME: some UI to alternate between manual entry vs roll button
  return(
    <div className="quasi-table">
      <div className="row">
        <label>Name</label>
        <input type="text" id="name" onKeyUp={enter}/>
      </div>

      <div className="row">
        <label>Modifier</label>
        <Modifier/>
      </div>

      <div className="row">
        <label>Manual</label>
        <input type="text" id="manual" onKeyUp={enter}/>
      </div>

      <div className="row">
        <label>Roll</label>
        <button className="roll" onClick={clickRoll}>Automatic Roll</button>
        <button className="clear-all" onClick={clickClear}>clear all</button>
      </div>
    </div>
  )
}

export default connect(state => state, { clearAll, del, manualRoll, roll })(NameInput)
