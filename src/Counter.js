import { useState } from "react"

function Counter(props) {

  
  const { 
    message,
    name
  } = props

  const [counter, setCounter] = useState(0)

  const [example, setExample] = useState({})

  const handleClick = () => {
    const guyPerson = {name: 'Guy'}
    setExample(guyPerson)
    setCounter(counter + 1)
  }

  //jsx <- javascript
  return (
    <>
      <h1>Hi Counter {counter}</h1>
      <pre>{example ? example.name : ''}</pre>
      <h2>{name}</h2>
      <button onClick={handleClick}>{message}</button>
    </>
  )
}

export default Counter