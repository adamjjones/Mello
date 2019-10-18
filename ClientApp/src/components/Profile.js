import React, { Fragment } from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import NavBar from './NavBar'

const Profile = props => {
  const { loading, user } = useAuth0()

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <NavBar {...props} />
      <img className="profile-img" src={user.picture} alt="Profile" />

      <h2>Full name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
    </Fragment>
  )
}

export default Profile
