import React, { Component, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ActiveBoard = props => {
  const [cardOpen, setCardOpen] = useState(false)
  const createCard = async () => {
    await axios
      .post('https://localhost:5001/api/Cards', {
        name: 'A card',
        category: 'Cards'
      })
      .then(resp => {
        console.log(resp)
      })
  }

  const toggleDisplay = () => {
    setCardOpen(prevState => !prevState)
  }

  const displayNewCard = () => {
    if (cardOpen) {
      return (
        <div
          className="card"
          style={{
            backgroundColor: 'blue',
            width: '100px',
            height: '100px'
          }}
        ></div>
      )
    } else {
      return <></>
    }
  }

  return (
    <div>
      <NavBar {...props} />
      <button
        onClick={() => {
          // createCard()
          toggleDisplay()
        }}
      >
        Create card
      </button>
      {displayNewCard()}
    </div>
  )
}
export default ActiveBoard
