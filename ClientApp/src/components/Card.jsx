import React, { useState } from 'react'
import axios from 'axios'

const Card = prop => {
  const [cardInput, setCardInput] = useState('')
  const [showInput, setShowInput] = useState(true)
  const [cards, setcards] = useState([])
  const createCard = async () => {
    await axios
      .post('/api/Cards', {
        name: 'A card',
        category: 'Cards',
        value: cardInput
      })
      .then(resp => {
        console.log(resp)
        setcards([...cards, resp.data])
      })
  }

  return (
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
          createCard()
          console.log(cardInput)
          return setShowInput(false)
        }}
      >
        Add
      </button>
    </div>
  )
}
export default Card
