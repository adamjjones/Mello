import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './NavBar'
import Showboards from './Showboards'
import Board from './Board'
import Profile from './Profile'
// import AuthO from './auth'

const HomePage = ({ props }) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavBar {...props} />
          </Route>

          <Route path="/Board" exact>
            <Board {...props} transparent={true} />
          </Route>

          <Route path="/Showboards" exact>
            <Showboards {...props} />
          </Route>

          <Route path="/Boards/:id" component={Board} exact></Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default HomePage
