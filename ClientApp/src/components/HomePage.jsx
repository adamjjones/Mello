import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
  withRouter
} from 'react-router-dom'
import NavBar from './NavBar'
import Showboards from './Showboards'
import ActiveBoard from './ActiveBoard'

const HomePage = props => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavBar {...props} />
          </Route>
          <Route path="/ActiveBoard" exact>
            <ActiveBoard {...props} transparent={true} />
          </Route>
          <Route path="/Showboards" exact>
            <Showboards {...props} />>
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default HomePage
