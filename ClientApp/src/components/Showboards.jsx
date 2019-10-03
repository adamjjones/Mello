import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Showboards = ({ props }) => {
  let [Boards, setBoards] = useState({})
  const createBoard = async () => {
    await axios
      .post('https://localhost:5001/api/Boards', {
        name: 'something',
        category: 'something else'
      })
      .then(resp => {
        console.log(resp)
      })
    const handleClick = event => {
      event.target.classList.add('click-state')
    }
    return <input onClick={handleClick} type="text" />
  }

  const displayBoards = async () => {
    setBoards = await axios
      .get('https://localhost:5001/api/Boards')
      .then(resp => {
        setBoards(resp)
        console.log(Boards)
        return (
          <div>
            <p>{Boards}</p>
          </div>
        )
      })
  }

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
        <Link to="/ActiveBoard">
          <p className="placeholder">Board 1</p>
        </Link>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
      </section>
      <button
        className="createboard placeholder"
        onClick={() => {
          createBoard()
        }}
      >
        Create Board
      </button>
    </div>
  )
}
export default Showboards
