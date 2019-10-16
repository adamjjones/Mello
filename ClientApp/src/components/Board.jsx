import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import Card from './Card'

const Board = props => {
  // const [cardOpen, setCardOpen] = useState(false)
  const [cards, setcards] = useState([])
  const [cardInput, setCardInput] = useState('')
  const [showInput, setShowInput] = useState(true)

  // const [deleteCards, setDeleteCards] = useState(false)
  // const [deleteValue, setDeleteValue] = useState('')
  const createCard = async () => {
    console.log({ props })
    await axios
      .post('/api/Cards', {
        name: 'A card',
        category: 'Cards',
        value: cardInput,
        boardsId: props.match.params.id
      })
      .then(resp => {
        console.log(resp)
        setcards([...cards, resp.data])
      })
  }

  const getCards = async id => {
    await axios.get(`/api/Boards/${props.match.params.id}/cards`).then(resp => {
      console.log('Hey this is our get cards', resp.data)
      setcards(resp.data)
      return resp.data
    })
  }

  // const addCard = () => {
  //   setcards([...cards, { id: 0, name: 'new Card', description: 'desc' }])
  // }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div>
      <NavBar {...props} />
      <button onClick={createCard}>Create Card</button>
      <div
        className="cards"
        style={{
          marginBottom: '10px',
          backgroundColor: `rgb(255, 75, 75)`,
          opacity: '0.7',
          width: '300px',
          height: '130px'
        }}
      >
        first card
        {showInput && (
          <input
            className="card-input"
            value={cardInput}
            onChange={e => setCardInput(e.target.value)}
          />
        )}
        {cardInput.length > 0 && <h2 className="card-value">{cardInput}</h2>}
        <button
          className="add-text"
          onClick={event => {
            console.log(cardInput)
            return setShowInput(false)
          }}
        >
          Add
        </button>
      </div>
      {console.log('cards', cards)}
      {cards.map(card => {
        // if (card.cardInput != null) {
        return <Card cardValue={card} />
        // } else {
        //   return <></>
        // }
      })}
      ;
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
