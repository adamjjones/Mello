import React, { Fragment } from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import NavBar from './NavBar'

const Profile = (props) => {
  const { loading, user } = useAuth0()

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <NavBar {...props} />
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  )
}

export default Profile
