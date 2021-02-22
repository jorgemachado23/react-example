export const getPosts = async () => {
  const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
  return posts
}

export const updatePost = async (post) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response
}

export const saveNewPost = async (post) => {
  return await (await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })).json()
}