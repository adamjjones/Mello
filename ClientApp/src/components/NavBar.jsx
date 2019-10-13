import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './auth'

const NavBar = props => {
  console.log('props', props)
  return (
    <div>
      <nav
        className="navbar"
        role="navigation"
        aria-label="dropdown navigation"
      >
        <div className="navbar-item has-dropdown is-hoverable">
          <a href="/" className="navbar-link">
            Navigation
          </a>

          <div className="navbar-dropdown">
            <Link to="/" className="navbar-item">
              <span>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </span>
            </Link>

            <Link to="/Showboards" className="navbar-item">
              <span>
                <i className="fas fa-clipboard-list"></i>
                <span>Boards</span>
              </span>
            </Link>

            <Link to="/Board" className="navbar-item">
              <span>
                <i className="fas fa-plus"></i>
                <span>Create</span>
              </span>
            </Link>

            <hr className="navbar-divider" />
            <div className="navbar-item">
              <button
                className="login"
                onClick={() => {
                  Auth.login()
                }}
              >
                Sign Up or Login
              </button>
            </div>
          </div>
        </div>
        <div className="title">
          <span>Mello</span>
        </div>
        <button
          className="login-main"
          onClick={() => {
            Auth.login()
          }}
        >
          Sign Up or Login
        </button>
      </nav>
    </div>
  )
}
export default NavBar
