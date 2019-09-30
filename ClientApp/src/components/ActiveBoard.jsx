import React, { withRouter } from 'react'
import NavBar from './NavBar'

const ActiveBoard = props => {
  return (
    <div>
      <NavBar {...props} />
      <h2>This is the ActiveBoard component rendering </h2>
    </div>
  )
}

export default ActiveBoard
