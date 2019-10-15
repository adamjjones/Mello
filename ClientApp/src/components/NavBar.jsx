import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../react-auth0-wrapper'

const NavBar = props => {
  console.log('props', props)
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
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
        <div class="navbar-item has-dropdown is-hoverable"></div>
      </div>
      <div className="title">
        <span>Mello</span>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
// <div>
//   <nav
//     className="navbar"
//     role="navigation"
//     aria-label="dropdown navigation"
//   >
//     <div className="navbar-item has-dropdown is-hoverable">
//       <a href="/" className="navbar-link">
//         Navigation
//       </a>

//       <div className="navbar-dropdown">
//         <Link to="/" className="navbar-item">
//           <span>
//             <i className="fas fa-home"></i>
//             <span>Home</span>
//           </span>
//         </Link>

//         <Link to="/Showboards" className="navbar-item">
//           <span>
//             <i className="fas fa-clipboard-list"></i>
//             <span>Boards</span>
//           </span>
//         </Link>

//         <Link to="/Board" className="navbar-item">
//           <span>
//             <i className="fas fa-plus"></i>
//             <span>Create</span>
//           </span>
//         </Link>

//         <hr className="navbar-divider" />
//         <div className="navbar-item">
//           <button>Sign Up or Login</button>
//         </div>
//       </div>
//     </div>
//     <div className="title">
//       <span>Mello</span>
//     </div>
//     <button className="login-main">Sign Up or Login</button>
//   </nav>
// </div>
