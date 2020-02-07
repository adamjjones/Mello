import React, { useState } from 'react'

const Card = props => {
  const [showInput] = useState(true)

  console.log(props.cardValue.name)
  return (
    <div>
      <div
        key={props.cardValue.id}
        className="cards"
        style={{
          marginBottom: '10px',
          backgroundColor: `rgb(255, 75, 75)`,
          opacity: '0.7',
          width: '300px',
          height: '130px'
        }}
      >
        <i
          className="delete-card fas fa-times"
          onClick={() => {
            props.deleteCard(props.cardValue)
          }}
        ></i>
        {showInput && (
          <input
            className="card-input"
            value={props.cardValue.name}
            onChange={e => props.setCardInput(props.cardValue.id, 'name', e.target.value)}
          />
        )}
        <h2 className="card-value">{props.cardValue.value}</h2>
        <button
          className="add-text"
          onClick={event => {
            props.updateCard(props.cardValue)
            // return setShowInput(false)
          }}
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default Card
