import { useState } from "react"

function Card() {

  const [cards, setCards] = useState([])

  const handleAddCard = () => {
    const newCard = { name: `card-${cards.length}` }
    const newCards = [...cards, newCard]
    setCards(newCards)
  }

  const handleDeleteCard = (selectedIndex) => {
    const newCards = cards.filter((card, index) => selectedIndex !== index)
    setCards(newCards)
  }

  const handleChangeName = (selectedIndex, newName) => {
    const newCards = cards.filter((card, index) => selectedIndex === index ? {...card, name: newName} : card)
    setCards(newCards)
  }

  return(
    <ul>
      {
        cards.map((card, i) => (
          <li>
            <input type='text' onChange={(event) => handleChangeName(i, event.target.value)} />
            <button 
              onClick={() => handleDeleteCard(i)}
            >
              Remove Card
            </button>
          </li> 
        ))
      }
      <button onClick={handleAddCard}>Add card</button>
    </ul>
  )
}
export default Card