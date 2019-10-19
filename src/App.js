import React, { useReducer } from 'react'
import './App.scss'

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * Math.floor(max));
}

const highScoresFirst = (a, b) => {if (a.roll > b.roll) return -1}

const reducer = (state, action) => {
  switch (action.type) {
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
    {
      name: 'Tolgar',
      roll: 10,
    },
  ],
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clickHandler = () => {
    const name = document.querySelector("input").value
    if ('' !== name && !/\s/g.test(name)) {
      dispatch({type: 'ROLL', name})
    }
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
          <button onClick={clickHandler}>Roll</button>
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
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
