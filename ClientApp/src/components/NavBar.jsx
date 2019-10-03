import React from 'react'
import { Link } from 'react-router-dom'

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
          <a className="navbar-link">Navigation</a>

          <div className="navbar-dropdown">
            <Link to="/" className="navbar-item">
              <span>
                <i className="fas fa-home"></i>
                Home
              </span>
            </Link>

            <Link to="/Showboards" className="navbar-item">
              <span>
                <i className="fas fa-clipboard-list"></i>
                <span>Boards</span>
              </span>
            </Link>

            <div>
              <Link to="/ActiveBoard" className="navbar-item">
                <span>
                  <i className="fas fa-plus"></i>
                  Create
                </span>
              </Link>
            </div>

            <hr className="navbar-divider" />
            <div className="navbar-item">
              <button className="login">Sign Up or Login</button>
            </div>
          </div>
        </div>
        <div className="title">
          <span>Mello</span>
        </div>
        <button className="login-main">Sign Up or Login</button>
      </nav>
    </div>
  )
}

{
  /* <nav classNameName={`top-nav ${props.transparent ? 'top-nav-transparent ' : ''}`}
                  >
                    <Link to="/">
                      
                    </Link>
                    
                    <span classNameName="title">
                      <span>Mello</span>
                      <span>
                        <span classNameName="nav-buttons-right">
                          
          
                          <button id="login">
                            <span>
                              <a href="#">
                                <i classNameName="fas fa-sign-in-alt"></i>
                              </a>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </nav> */
}
//   <button className="modal-close is-large" aria-label="close"></button>
//  </div>

export default NavBar
