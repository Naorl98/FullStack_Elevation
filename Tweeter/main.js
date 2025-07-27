const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function () {
  const input = $("#input").val()
  if (input) {
    tweeter.addPost(input)
    $("#input").val("") // נקה שדה
    renderer.renderPosts(tweeter.getPosts())
  }
})

$("#posts").on("click", ".delete", function () {
  const postId = $(this).closest(".post").data().id
  tweeter.removePost(postId)
  renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".comment-button", function () {
  const postElement = $(this).closest(".post")
  const postId = postElement.data().id
  const commentText = postElement.find(".comment-input").val()

  if (commentText) {
    tweeter.addComment(postId, commentText)
    renderer.renderPosts(tweeter.getPosts())
  }
})

$("#posts").on("click", ".delete-comment", function () {
  const postElement = $(this).closest(".post")
  const postId = postElement.data().id
  const commentId = $(this).data().id

  tweeter.removeComment(postId, commentId)
  renderer.renderPosts(tweeter.getPosts())
})
