async function getUserWithPosts(userId) {
    try {
      const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if (!userRes.ok) throw new Error('User not found')
  
      const user = await userRes.json()
  
      const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      if (!postsRes.ok) throw new Error('Posts not found')
  
      const posts = await postsRes.json()
  
      return {
        user,
        posts
      }
  
    } catch (error) {
      console.error("Error:", error.message)
      return null
    }
  }
  