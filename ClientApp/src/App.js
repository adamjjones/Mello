import React from 'react'
import HomePage from './components/HomePage'
import './components/index.css'
import 'bulma/css/bulma.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <HomePage />
        </header>
      </BrowserRouter>
    </div>
  )
}

export default App
