import { useState } from "react"

function Card2(){
  const [cards, setCards] = useState([])

  const handleAddCard = () => {
    const card = { name: `card-${cards.length}`}
    const newCards = [...cards, card]
    setCards(newCards)
  }

  const handleDeleteCard = (selectedIndex) => {
    const newCards = cards.filter((card, index) => index !== selectedIndex)
    setCards(newCards)
  }

  const handleChangeCardName = (selectedIndex, newName) => {
    const newCards = cards.map((card, index) => selectedIndex === index ? { ...card, name: newName } : card)
    setCards(newCards)
  }

  return (
    <ul>
      {
        cards.map((card, index) => (
          <li>
            <h1>{card.name}</h1>
            <input type='text' onChange={(event) => { handleChangeCardName(index, event.target.value)}} />
            <button
              onClick={() => handleDeleteCard(index)}
            >Remove card</button>
          </li>
        ))
      }
      <button onClick={handleAddCard}>Add Card</button>
    </ul>  
  )
}

export default Card2
