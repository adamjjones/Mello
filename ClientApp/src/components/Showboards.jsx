import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Showboards = ({ props }) => {
  let [Boards, setBoards] = useState({})
  // const [moveToBoard, setMoveToBoard] = useState(false)
  const [newBoard, setNewBoard] = useState(null)
  let [generateBoards, setgenerateBoards] = useState([])

  useEffect(() => {
    loadBoards()
  }, [])

  const createBoard = async () => {
    await axios
      .get('/api/Boards', {
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
    console.log(id)
    await axios.delete(`/api/Boards/${id.type.value}`)
    console.log('Deleted')
  }

  const loadBoards = async () => {
    console.log('Starting Request')
    const response = await axios.get(`/api/Boards`)
    setgenerateBoards(response.data)
    console.log(response.data, 'This is our response')
  }

  // const displayBoards = async () => {
  //   setBoards = await axios
  //     .get('https://localhost:5001/api/Boards')
  //     .then(resp => {
  //       setBoards(resp)
  //       setgenerateBoards(resp)
  //       console.log(Boards)
  //       return (
  //         <div>
  //           <p>{Boards}</p>
  //         </div>
  //       )
  //     })
  // }

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
        <Link to="/Board">
          <p className="placeholder">Board 1</p>
        </Link>
        {generateBoards.map((b, i) => {
          return (
            <div className="placeholder" key={i}>
              <div className="delete">
                <i
                  className="fas fa-times"
                  onClick={() => {
                    console.log('Clicked')
                    DeleteBoard(b.Id)
                  }}
                ></i>
              </div>
              <p>{b.name}</p>
              <p>{b.category}</p>
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
