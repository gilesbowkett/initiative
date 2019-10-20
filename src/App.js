import React, { useReducer } from 'react'
import InitiativeRow from './InitiativeRow'
import NameInput from './NameInput'
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

  const clearAll = () => {
    document.querySelector("input").value = ''
    document.querySelector("input").focus()
    dispatch({type: 'CLEAR_ALL'})
  }

  return (
    <div className="App">
      <NameInput enter={enter} roll={roll} clearAll={clearAll}/>

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
