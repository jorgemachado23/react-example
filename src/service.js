export const getPeople = async () => {
  const people = await (await fetch('https://swapi.dev/api/people/')).json()
  return people.results
}

