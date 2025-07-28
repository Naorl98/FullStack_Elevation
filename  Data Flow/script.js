const posts = [
    { name: "Naor", text: "Hello world!" },
    { name: "Dana", text: "I love coding!" }
  ]
  
  const render = function () {
    const container = $("#posts-container")
    container.empty() 
  
    for (let post of posts) {
      const postDiv = $(`<div class="post"><strong>${post.name}</strong>: ${post.text}</div>`)
      container.append(postDiv)
    }
  }
  
  $("#submitBtn").on("click", function () {
    const name = $("#nameInput").val()
    const text = $("#textInput").val()
  
    if (!name || !text) return
  
    posts.push({ name, text }) 
    $("#nameInput").val("") 
    $("#textInput").val("")
    render() 
  })
  
  render()
  