import React from 'react'
import { connect } from 'react-redux'
import Modifier from './Modifier'
import { clearAll, del, roll } from './actions'

const NameInput = ({ clearAll, del, roll }) => {
  const refocus = () => {
    document.querySelector("input").value = ''
    document.querySelector("input").focus()
  }

  const clickClear = () => {
    refocus()
    clearAll()
  }

  const clickRoll = () => {
    const name = document.querySelector("input").value
    if ('' !== name && !/^\s*$/g.test(name)) {
      refocus()
      roll(name)
    }
  }

  const enter = (event) => {
    if (event.key === "Enter") {
      clickRoll()
    }   
  }

  return(
    <div className="row">
      <div className="column">
        <label>Name</label>
        <input type="text" id="name" onKeyUp={enter}/>
      </div>

      <div className="column">
        <label>Modifier</label>
        <Modifier/>
      </div>

      <div className="column">
        <label>Roll</label>
        <button className="roll" onClick={clickRoll}>Roll</button>
        <button className="clear-all" onClick={clickClear}>clear all</button>
      </div>
    </div>
  )
}

export default connect(state => state, { clearAll, del, roll })(NameInput)
