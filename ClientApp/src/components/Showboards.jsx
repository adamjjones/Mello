import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Showboards = props => {
  return (
    <div>
      <NavBar {...props} />
      <h1>Available Boards</h1>
      <div>
        <div className="shown-boards">Recently Viewed</div>
        <div className="shown-boards">Personal Boards</div>
      </div>
      <section className="boards">
        {/* will be dynamically generated later */}
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
      </section>
      <button
        className="createboard placeholder"
        onClick={event => {
          console.log(props)
          return <h1>It worked!</h1>
        }}
      >
        Create Board
      </button>
    </div>
  )
}
export default Showboards
