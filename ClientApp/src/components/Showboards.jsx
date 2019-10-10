import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

const Showboards = ({ props }) => {
  let [Boards, setBoards] = useState({})
  const [moveToBoard, setMoveToBoard] = useState(false)
  const [newBoard, setNewBoard] = useState(null)
  let [generateBoards, setgenerateBoards] = useState([])
  const createBoard = async () => {
    await axios
      .post('https://localhost:5001/api/Boards', {
        name: 'something',
        category: 'something else'
      })
      .then(resp => {
        console.log(resp.data)
        setNewBoard(resp.data)
      })
    const handleClick = event => {
      event.target.classList.add('click-state')
    }
    return <input onClick={handleClick} type="text" />
  }

  const DeleteBoard = async () => {
    await axios
      .delete(`https://localhost:5001/api/Boards`, {
        name: 'something',
        category: 'something else'
      })
      .then(resp => {
        console.log(resp)
      })
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

  // const mapBoards = async () => {
  //   setgenerateBoards = await axios.get(`https://localhost:5001/api/Boards`)
  //   .then(response => {
  //     setgenerateBoards(response)
  //       }
  //   }

  return (
    <div>
      <NavBar {...props} />
      <h1>Available Boards</h1>
      <div>
        <div className="shown-boards">Recently Viewed</div>
        <div className="shown-boards">Personal Boards</div>
      </div>
      <section className="boards">
        {generateBoards.map(b => {
          return <p>It works</p>
        })}
        {/* will be dynamically generated later */}
        {/* <Link to="/Board">
          <p className="placeholder">Board 1</p>
        </Link> */}
        {/* <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div> */}
      </section>
      {/* <Link to={`Boards/${Boards.id}`}> */}
      {newBoard ? <Redirect to={`/Boards/${newBoard.id}`} /> : null}
      <button
        className="createboard placeholder"
        onClick={() => {
          createBoard()
        }}
      >
        Create Board
      </button>
      {/* </Link> */}
      <button
        className="createboard placeholder"
        onClick={() => {
          DeleteBoard()
        }}
      >
        Delete Board
      </button>
    </div>
  )
}
export default Showboards
