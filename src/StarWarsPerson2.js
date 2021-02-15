import { useState, useEffect } from "react"
import { getPeople } from './service2'

function StarWarsPerson2() {

  const [startWarsPersons, setStarWarsPersons] = useState([])

  useEffect(() => {
    async function initializeData() {
      const people = await getPeople()
      setStarWarsPersons([...people])
    }
    initializeData()
  }, [])

  return (
    <ul>
      { startWarsPersons.map(startWarPerson => {
        return <li>
          <span>{startWarPerson.name}</span>
          <span>{startWarPerson.height}</span>
          <span>{startWarPerson.gender}</span>
        </li>
      })}
    </ul>
  )
}

export default StarWarsPerson2
