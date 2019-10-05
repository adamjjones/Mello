import React, { Component, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import Card from './Card'
import KeyboardEventHandler from 'react-keyboard-event-handler'

const ActiveBoard = props => {
  const [cardOpen, setCardOpen] = useState(false)
  const [cards, setcards] = useState([])
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

  // const saveCard = event => {
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         marginBottom: '10px',
  //         backgroundColor: `rbg(200, 200, 200)`,
  //         opacity: 0.5,
  //         width: '200px',
  //         height: '100px'
  //       }}
  //     >
  //       <input
  //         type="submit"
  //         onKeyDown={event => {
  //           event.preventDefault()
  //         }}
  //       />
  //       {/* <p>{event.target}</p> */}
  //     </div>
  //   )
  // }

  const addCard = () => {
    setcards([...cards, { id: 0, name: 'new Card', description: 'desc' }])
  }

  const toggleDisplay = () => {
    setCardOpen(!cardOpen)
    console.log('clicked', cardOpen)
  }

  const displayNewCard = () => {
    if (cardOpen) {
      return (
        <div
          className="card"
          style={{
            marginBottom: '10px',
            backgroundColor: `hsla(200, 50%, 50%, 0.5)`,
            width: '200px',
            height: '100px'
          }}
        >
          <input />
          <input type="submit" />
        </div>
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
          addCard()
        }}
      >
        Create card
      </button>
      {console.log('cards', cards)}
      {cards.map(card => {
        return <Card card={card} />
      })}
    </div>
  )
}
export default ActiveBoard
