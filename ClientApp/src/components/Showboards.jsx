import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Showboards = ({ props }) => {
  let [Boards, setBoards] = useState({})
  // const [moveToBoard, setMoveToBoard] = useState(false)
  const [newBoard, setNewBoard] = useState(null)
  let [generateBoards, setgenerateBoards] = useState([])
  const [toggleState, setToggleState] = useState('off')

  useEffect(() => {
    loadBoards()
  }, [])

  const createBoard = async () => {
    await axios
      .post('/api/Boards', {
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

  const DeleteBoard = async id => {
    setgenerateBoards(
      generateBoards.filter(b => {
        return b.id != id
      })
    )
    await axios.delete(`/api/Boards/${id}`)
  }

  const loadBoards = async () => {
    console.log('Starting Request')
    const response = await axios.get(`/api/Boards`)
    setgenerateBoards(response.data)
    console.log(response.data, 'This is our response')
  }

  return (
    <div>
      <NavBar {...props} />
      <h1 className="board-catergory">Available Boards</h1>
      {/* <div>
        <div className="shown-boards">Recently Viewed</div>
        <div className="shown-boards">Personal Boards</div>
      </div> */}
      <section className="boards">
        {/* will be dynamically generated later */}
        <Link to="/Board">
          <p className="placeholder">Board 1</p>
        </Link>

        {generateBoards.map((b, i) => {
          return (
            <div className="placeholder" key={i}>
              <div>
                <i
                  className="delete fas fa-times"
                  onClick={() => {
                    DeleteBoard(b.id)
                    setToggleState(toggleState === 'off' ? 'on' : 'off')
                    console.log(toggleState)
                  }}
                ></i>
              </div>
              <Link to={`/Boards/${b.id}`}>
                <p>{'id:' + b.id}</p>
                <p>{b.name}</p>
                <p>{b.category}</p>
              </Link>
            </div>
          )
        })}
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
    </div>
  )
}
export default Showboards
