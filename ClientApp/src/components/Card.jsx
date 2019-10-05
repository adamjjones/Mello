import React from 'react'

const card = () => {
  return (
    <div
      className="card"
      style={{
        marginBottom: '10px',
        backgroundColor: `hsla(200, 50%, 50%, 0.8)`,
        width: '200px',
        height: '100px'
      }}
    >
      {' '}
      id:{card.id} name:{card.name} description:{card.description}
    </div>
  )
}

export default card
