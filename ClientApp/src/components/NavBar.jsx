import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
  console.log('props', props)
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Navigation</a>

          <div class="navbar-dropdown">
            <Link to="/" class="navbar-item">
              <span>
                <i className="fas fa-home"></i>
                Home
              </span>
            </Link>

            <Link to="/Showboards" class="navbar-item">
              <span>
                <i class="fas fa-clipboard-list"></i>
                <span>Boards</span>
              </span>
            </Link>

            <div>
              <Link to="/ActiveBoard" class="navbar-item">
                <span>
                  <i className="fas fa-plus"></i>
                  Create
                </span>
              </Link>
            </div>

            <hr class="navbar-divider" />
            <div class="navbar-item">Version 0.7.5</div>
          </div>
        </div>
        <button id="login">Sign Up or Login</button>
      </nav>
    </div>
  )
}

{
  /* <nav className={`top-nav ${props.transparent ? 'top-nav-transparent ' : ''}`}
                  >
                    <Link to="/">
                      
                    </Link>
                    
                    <span className="title">
                      <span>Mello</span>
                      <span>
                        <span className="nav-buttons-right">
                          
          
                          <button id="login">
                            <span>
                              <a href="#">
                                <i className="fas fa-sign-in-alt"></i>
                              </a>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </nav> */
}
//   <button class="modal-close is-large" aria-label="close"></button>
//  </div>

export default NavBar
