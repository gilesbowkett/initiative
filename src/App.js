import React from 'react'
import { connect } from 'react-redux'
import InitiativeRow from './InitiativeRow'
import NameInput from './NameInput'
import './App.scss'

const App = ({ characters }) => (
  <div className="App">
    <NameInput/>

    {characters.map((character, idx) => (
      <InitiativeRow character={character} key={idx}/>
    ))}
  </div>
)

export default connect(s => s)(App)
