import React from 'react'
import HomePage from './components/HomePage'
import { useAuth0 } from './react-auth0-wrapper'
import './components/index.css'
import 'bulma/css/bulma.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import axios from 'axios'

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
