import React, { Component, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import Card from './Card'
import KeyboardEventHandler from 'react-keyboard-event-handler'

const Board = props => {
  const [cardOpen, setCardOpen] = useState(false)
  const [cards, setcards] = useState([])
  const [deleteCards, setDeleteCards] = useState(false)
  const [deleteValue, setDeleteValue] = useState('')
  const createCard = async () => {
    await axios
      .get('https://localhost:5001/api/Cards', {
        name: 'A card',
        category: 'Cards'
      })
      .then(resp => {
        console.log(resp)
        setcards([...cards, resp.data])
      })
  }

  const deleteCard = async () => {
    await axios
      .delete('https://localhost:5001/api/Cards', {
        id: 1,
        Name: 'something'
      })
      .then(resp => {
        console.log(resp.data)
        // setNewBoard(resp.data)
      })
  }

  const addCard = () => {
    setcards([...cards, { id: 0, name: 'new Card', description: 'desc' }])
  }

  const toggleDisplay = () => {
    setCardOpen(!cardOpen)
    console.log('clicked', cardOpen)
  }

  return (
    <div>
      <NavBar {...props} />
      <button
        onClick={() => {
          createCard()
        }}
      >
        Create card
      </button>
      {console.log('cards', cards)}
      {cards.map(card => {
        return <Card key={card.id} card={card} />
      })}
    </div>

    // {deleteValue.lenght >= 0 && <div className="cards">{cardInput}</div>}
    //   <button
    //     className="add-text"
    //     onClick={event => {
    //       console.log(deleteValue)
    //       return setDeleteCard(true)
    //     }
    //   }
    //   >
    // Delete
    //   </button>
    // {deleteValue.length >= 0 && cardInput}
    // <button
    //   className="add-text"
    //   onClick={(e) => {
    //     console.log(deleteValue)
    //     return setDeleteCard(true)
    //   }}>
    //   Delete
    // </button>
  )
}
export default Board
