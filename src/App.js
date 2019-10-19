import React, { useReducer } from 'react'
import './App.scss'

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialState = {
  characters: [
    {
      name: 'Tolgar',
      roll: 17,
    },
  ],
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <label>Name</label>
          <input type="text" id="name"/>
        </div>

        <div className="column">
          <label>Roll</label>
          <button>Roll</button>
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
