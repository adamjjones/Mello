import React, { Component } from 'react'
import HomePage from './components/HomePage'
import Showboards from './components/Showboards'
import Board from './components/Board'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './components/index.css'
import 'bulma/css/bulma.css'
// import './scss/custom.scss'

class App extends Component {
  render() {
    return (
      <>
        <HomePage />
      </>
    )
  }
}

export default App
