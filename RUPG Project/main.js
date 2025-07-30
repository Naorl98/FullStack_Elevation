const apiManager = new APIManager()
const renderer = new Renderer()
const userPage = new UserPage(apiManager, renderer)
userPage.generate()


$("#load-btn").on("click", function () {
  userPage.generate()
})

$("#toggle-friends-btn").on("click", () => {
    $("#friends-list").toggleClass("show")
  })
  
  