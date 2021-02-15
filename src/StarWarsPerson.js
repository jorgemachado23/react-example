import { useState, useEffect } from "react"
import { getPeople } from "./service"

function StartsWarsPerson() {

  const [starWarsPersons, setStartWarsPersons] = useState([])

  useEffect(() => {
    async function initializeData() {
      const people = await getPeople()
      setStartWarsPersons(people)
    }
    initializeData()
  }, [])
  
  return (
    <ul>
      {starWarsPersons.map((starWarsPerson) => {
        return <li>{starWarsPerson.name}</li>
      })}
    </ul>
  )
}

export default StartsWarsPerson