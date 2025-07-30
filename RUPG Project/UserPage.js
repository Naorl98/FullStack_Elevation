class UserPage {
    constructor(apiManager, renderer) {
      this.apiManager = apiManager
      this.renderer = renderer
    }
  
    async generate() {
      try {
        const userData = await this.apiManager.fetchUserData()
        const quote = await this.apiManager.fetchQuote()
        const pokemon = await this.apiManager.fetchPokemon()
        const meatText = await this.apiManager.fetchMeatText()
  
        this.renderer.renderMainUser(userData.mainUser)
        this.renderer.renderFriends(userData.friends)
        this.renderer.renderQuote(quote)
        this.renderer.renderPokemon(pokemon)
        this.renderer.renderAboutMe(meatText)
      } catch (err) {
        console.error("Error generating user page:", err)
      }
    }
  }
  