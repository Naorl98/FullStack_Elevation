async function dashboard() {
    try {
      const [usersRes, postsRes, commentsRes] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/comments')
      ])
  
      const [users, posts, comments] = await Promise.all([
        usersRes.json(),
        postsRes.json(),
        commentsRes.json()
      ])
  
      const summary = {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: posts.length / users.length,
        avgCommentsPerPost: comments.length / posts.length
      }
  
      const userPostCounts = users.map(user => {
        const userPosts = posts.filter(p => p.userId === user.id)
        const postIds = userPosts.map(p => p.id)
        const userComments = comments.filter(c => postIds.includes(c.postId))
  
        return {
          name: user.name,
          postCount: userPosts.length,
          commentCount: userComments.length
        }
      })
  
      const topUsers = userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 3)
  
      const recentPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5)
  
      return {
        summary,
        topUsers,
        recentPosts
      }
  
    } catch (err) {
      console.error("Error in dashboard:", err.message)
      return null
    }
  }
dashboard().then(data => console.log(data))
