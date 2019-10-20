import React, { useReducer } from 'react'
import InitiativeRow from './InitiativeRow'
import { initialState, reducer } from './reducer'
import './App.scss'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const roll = () => {
    const name = document.querySelector("input").value
    document.querySelector("input").value = ''
    document.querySelector("input").focus()
    if ('' !== name && !/^\s*$/g.test(name)) {
      dispatch({type: 'ROLL', name})
    }
  }

  const del = (name) => (
    () => dispatch({type: 'DELETE', name})
  )

  const enter = (event) => {
    if (event.key === "Enter") {
      roll()
    }
  }

  const clearAll = () => (
    dispatch({type: 'CLEAR_ALL'})
  )

  return (
    <div className="App">
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

      {state.characters.map(({ name, roll }, idx) => (
        <InitiativeRow
          key={idx}
          state={state}
          dispatch={dispatch} // FIXME: sounds like React time
          name={name}
          roll={roll}
          del={del}
        />
      ))}
    </div>
  )
}

export default App
