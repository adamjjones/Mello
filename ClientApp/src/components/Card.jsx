import React, { useState } from 'react'
import axios from 'axios'

const Card = props => {
  const [cardInput2, setCardInput2] = useState('')
  const [showInput2, setShowInput2] = useState(true)
  const [cards2, setCards2] = useState([])

  const updateCard = async () => {
    await axios
      .put(`/api/Cards/${props.match.params.id}`, {
        value: cardInput2
      })
      .then(resp => {
        console.log(resp)
        console(cards2)
        setCards2([...cards2, resp.data.value])
      })
  }

  // if (props.cardValue.value) {
  console.log(props.cardValue.value)
  return (
    <div>
      <>
        <div
          key={cards2}
          className="cards"
          style={{
            marginBottom: '10px',
            backgroundColor: `rgb(255, 75, 75)`,
            opacity: '0.7',
            width: '300px',
            height: '130px',
            value: `{props.cardValue.value}`
          }}
        >
          {showInput2 && (
            <input
              className="card-input"
              value={cardInput2}
              onChange={e => setCardInput2(e.target.value)}
            />
          )}
          {cardInput2.length > 0 && (
            <h2 className="card-value">{props.match.params.cardValue.value}</h2>
          )}
          <button
            className="add-text"
            onClick={event => {
              updateCard()
              console.log(cardInput2)
              return setShowInput2(false)
            }}
          >
            Add
          </button>
        </div>
      </>
    </div>
  )
  // } else {
  //   return setCardInput2
  // }
}

export default Card
