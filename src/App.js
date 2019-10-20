import React, { useReducer } from 'react'
import './App.scss'
import { initialState, reducer } from './reducer'

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
        <div className="row" key={idx}>
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
      ))}
    </div>
  )
}

export default App
