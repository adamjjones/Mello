import React, { Component } from 'react'
import HomePage from './components/HomePage'
import Showboards from './components/Showboards'
import ActiveBoard from './components/ActiveBoard'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './components/index.css'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <HomePage />
        </Router>
      </>
    )
  }
}

export default App
