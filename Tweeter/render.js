const Renderer = function () {
    const renderPosts = function (posts) {
      $("#posts").empty()
  
      for (let post of posts) {
        const postElement = $(`<div class="post" data-id="${post.id}"></div>`)
  
        const postText = $(`<div class="post-text">${post.text}</div>`)
        const deleteButton = $(`<div class="delete" data-id="${post.id}">Delete Post</div>`)
  
        const commentsContainer = $('<div class="comments"></div>')
        for (let comment of post.comments) {
          const commentElement = $(`<div class="comment" data-id="${comment.id}">${comment.text}</div>`)
          const deleteCommentButton = $(`<div class="delete-comment" data-id="${comment.id}">X</div>`)
          commentsContainer.append(commentElement)
          commentsContainer.append(deleteCommentButton)
        }
  
        const commentInput = $('<input type="text" class="comment-input" placeholder="Got something to say?">')
        const commentButton = $('<button class="comment-button">Comment</button>')
  
        postElement.append(postText)
        postElement.append(deleteButton)
        postElement.append(commentsContainer)
        postElement.append(commentInput)
        postElement.append(commentButton)
  
        $("#posts").append(postElement)
      }
    }
  
    return {
      renderPosts
    }
  }
  