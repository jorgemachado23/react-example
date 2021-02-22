import { useState, useEffect } from "react"
import { getPosts, updatePost, saveNewPost } from "./postService2"

function Post() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function initializeData() {
      const newPosts = await getPosts()
      setPosts([...newPosts])
    }
    initializeData()
  }, [])

  const updatePostTitle = (newTitle, selectedIndex) => {
    const newPosts = posts.map((post, index) => selectedIndex === index ? {...post, title: newTitle} : post)
    setPosts([...newPosts])
  }

  const updatePostInServer = async (id) => {
    const postToBeUpdated = posts.find(post => post.id === id)
    const response = await updatePost(postToBeUpdated)
    if(response.ok) {
      alert('success')
    } else{
      alert('error')
    }
  }

  const handleAddNewPost = () => {
    const newPost = { title: '', body: '', userId: 1 }
    setPosts([newPost, ...posts])
  }

  const createNewPostInServer = async (selectedIndex) => {
    const postToBeCreated = posts.find((post, index) => selectedIndex === index)
    const postSaved = await saveNewPost(postToBeCreated)
    if (postSaved.id > 0) {
      const newPosts = posts.map((post, index) => selectedIndex === index ? postSaved : post)
      setPosts([...newPosts])
    }
  }

  return (
    <ul>
      <button onClick={handleAddNewPost}>Add new post</button>
      {posts.map((post, index) =>
        <li key={index}>
          <input
            value={post.title}
            onChange={(event) => updatePostTitle(event.target.value, index)}
          />
          <button onClick={() => post.id ? updatePostInServer(post.id) : createNewPostInServer(index) }>Update post</button>
        </li>)
      }
    </ul>
  )
}
export default Post
