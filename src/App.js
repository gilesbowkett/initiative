import React, { useReducer } from 'react'
import './App.scss'

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * Math.floor(max));
}

const highScoresFirst = (a, b) => {if (a.roll > b.roll) return -1}

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE':
      const minusDeleted = []
      state.characters.forEach((e) => {
        if (e.name !== action.name) {
          minusDeleted.push(e)
        }
      })  
      return {
        ...state,
        characters: minusDeleted,
      }

    case 'ROLL':
      const chars = state.characters
      chars.push({name: action.name, roll: getRandomInt(20)})

      return {
        ...state,
        characters: chars.sort(highScoresFirst),
      }

    default:
      return state
  }
}

const initialState = {
  characters: [
  ],
}

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

  const del = (name) => {
    return () => dispatch({type: 'DELETE', name})
  }

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <label>Name</label>
          <input type="text" id="name"/>
        </div>

        <div className="column">
          <label>Roll</label>
          <button onClick={roll}>Roll</button>
        </div>

        <div className="column"/>
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
            <div className="column">
              <button className="delete" onClick={del(name)}>✗</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
