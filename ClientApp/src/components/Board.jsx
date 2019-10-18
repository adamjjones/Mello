import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import Card from './Card'

const Board = props => {
  // const [cardOpen, setCardOpen] = useState(false)
  const [cards, setCards] = useState([])
  const [newCardName, setNewCardName] = useState('')
  // /toconst [showInput, setShowInput] = useState(true)

  // const [deleteCards, setDeleteCards] = useState(false)
  // const [deleteValue, setDeleteValue] = useState('')
  const createCard = async () => {
    console.log({ props })
    await axios
      .post('/api/Cards', {
        name: 'new card name',
        category: 'Cards',
        value: newCardName,
        boardsId: props.match.params.id
      })
      .then(resp => {
        console.log(resp)
        setCards([...cards, resp.data])
      })
  }

  // const DeleteCard = async id => {
  //   setCards(
  //     cards.filter(card => {
  //       return card.id != id
  //     })
  //   )
  //   await axios.delete(`/api/Cards/${id}`)
  // }

  const getCards = async id => {
    if (props.match) {
      await axios
        .get(`/api/Boards/${props.match.params.id}/cards`)
        .then(resp => {
          console.log('Hey this is our get cards', resp.data)
          setCards(resp.data)
          return resp.data
        })
    }
  }

  // const addCard = () => {
  //   setcards([...cards, { id: 0, name: 'new Card', description: 'desc' }])
  // }
  const updateCard = async (cardValue) => {
    // curl -X PATCH "https://localhost:5001/api/Cards/7?id=7&q=name" -H  "accept: text/plain" -H  "Content-Type: application/json-patch+json" -d "\"new name\""
    await axios.patch(`/api/Cards/${cardValue.id}/name`, 
        cardValue.name,
        { 
          headers: {
            'Content-Type': 'application/json-patch+json'
          }
        }
      ).then(resp => {
        console.log(resp)
      })
  }
  console.log(cards)

  const deleteCard = async cardValue => {
    setCards(
      cards.filter(card => {
        return card.id != cardValue.id
      })
    )
    await axios.delete(`/api/Cards/${cardValue.id}`)
  }
  const setCardInput = (id, fieldName, value) => {
    const newCards = cards.map(c => {
      if( c.id === id) {
        c[fieldName] = value; 
        console.log("updated card " + id, c);
      } 
      return c;
    }); 
    setCards(newCards);
  };


  useEffect(() => {
    getCards()
  }, [])

  return (
    <div>
      <NavBar {...props} />
      <button onClick={createCard}>Create Card</button>
      {cards.map(card => {
        return <Card key={card.id} cardValue={card} deleteCard={deleteCard} updateCard={updateCard} setCardInput={setCardInput} />
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
