import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
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
            <h1 className="HomePage">Welcome to Mello.</h1>
            <h3 className="HomePage">A tool for managing to-do tasks.</h3>
          </Route>

          <Route path="/Board" exact>
            <Board {...props} transparent={true} />
          </Route>

          <Route path="/Showboards" exact>
            <Showboards {...props} />
          </Route>

          <Route path="/Boards/:id" component={Board} exact></Route>
          <Route path="/Profile" exact>
            <Profile {...props} />
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
