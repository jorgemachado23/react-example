import { useEffect, useState } from "react"
import { getPosts, updatePost, saveNewPost } from "./postService"

function Posts(){

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    async function initializeData() {
      const servicePost = await getPosts()
      setPosts(servicePost)
    }
    initializeData()
  }, [])

  const updatePostTitle = (newTitle, selectedIndex) => {
    const newPosts = posts.map((post, index) => selectedIndex === index ? { ...post, title: newTitle } : post)
    setPosts([...newPosts])
  }

  const updatePostInServer = async (id) => {
    const postToUpdate = posts.find((post, index) => post.id === id)
    const response = await updatePost(postToUpdate)
    if(response.status === 200){
      alert('Success')
    } else {
      alert('Error')
    }
  }

  const createNewPostInServer = async (selectedIndex) => {
    const post = posts.find((p, index) => index === selectedIndex)
    const postSaved = saveNewPost(post)
    if(postSaved.id > 0){
      const newPosts = posts.map((p, index) => selectedIndex === index ? postSaved : post)
      setPosts([...newPosts])
    }
  }

  const handleAddNewPost = () => {
    const newPost = { title: '', body: '', userId: 1 }
    setPosts([newPost, ...posts])
  }

  return (
    <ul>
      <button onClick={handleAddNewPost}>Add new post</button> 
      { posts.map((post, index) =>
        <li>
          <input value={post.title} onChange={(event) => updatePostTitle(event.target.value, index)} />
          <button onClick={() => post.id > 0 ? updatePostInServer(post.id) : createNewPostInServer(index)}>Update Post</button>
        </li>
      )}
    </ul>
  )
}

export default Posts