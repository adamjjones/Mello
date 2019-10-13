import React, { Component } from 'react'
import HomePage from './components/HomePage'
// import Showboards from './components/Showboards'
// import Board from './components/Board'
import { Route } from 'react-router-dom'
import './components/index.css'
import 'bulma/css/bulma.css'
// import auth from 'auth0-js
import Auth from './components/auth'
import axios from 'axios'

class App extends Component {
  componentWillMount() {
    if (Auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: Auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <>
        <Route path="/login" render={() => Auth.login()} />
        <Route
          path="/logout"
          render={() => {
            Auth.logout()
            return <p />
          }}
        />
        <Route
          path="/callback"
          render={() => {
            Auth.handleAuthentication(() => {
              // // NOTE: Uncomment the following lines if you are using axios
              // //
              axios.defaults.headers.common = {
                Authorization: Auth.authorizationHeader()
              }
            })
            return <p />
          }}
        />
        <HomePage />
      </>
    )
  }
}

export default App
