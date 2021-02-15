export const getPeople = async () => {
  const response = await fetch('https://swapi.dev/api/people/')
  const people = await response.json()
  return people.results
}