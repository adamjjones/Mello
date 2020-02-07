import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const Showboards = ({ props }) => {
  // const [moveToBoard, setMoveToBoard] = useState(false)
  const [newBoard, setNewBoard] = useState(null)
  let [generateBoards, setgenerateBoards] = useState([])

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
        return b.id !== id
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
      <h1 className="board-category">Available Boards</h1>
      <button
        className="createboard"
        onClick={() => {
          createBoard()
        }}
      >
        Create Board
      </button>
      <section className="boards">
        {generateBoards.map((b, i) => {
          return (
            <div className="board" key={i}>
              <div>
                <i
                  className="delete-board fas fa-times"
                  onClick={() => {
                    DeleteBoard(b.id)
                  }}
                ></i>
              </div>
              <Link to={`/Boards/${b.id}`}>
                <p>{'id:' + b.id}</p>
                <div className='board-name'>{b.name}</div>
                {/* <p>{b.category}</p> */}
                <div className='card-count'>{b.cards.length} card{b.cards.length !== 1 ? 's' : ''}</div>
              </Link>
            </div>
          )
        })}
      </section>
      {/* <Link to={`Boards/${Boards.id}`}> */}
      {newBoard ? <Redirect to={`/Boards/${newBoard.id}`} /> : null}
      {/* </Link> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Showboards)
