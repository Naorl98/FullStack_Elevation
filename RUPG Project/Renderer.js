class Renderer {
  renderMainUser(user) {
    try {
      $("#user-img").attr("src", user.picture.large)
      $("#user-name").text(`${user.name.first} ${user.name.last}`)
      $("#user-location").text(`${user.location.city}, ${user.location.state}`)
    } catch (error) {
      console.error("Error in renderMainUser:", error)
    }
  }

  renderFriends(friends) {
    try {
      const $list = $("#friends-list")
      $list.empty()
      friends.forEach(f => {
        $list.append(`<li>${f.name.first} ${f.name.last}</li>`)
      })
    } catch (error) {
      console.error("Error in renderFriends:", error)
    }
  }

  renderQuote(quote) {
    try {
      $("#kanye-quote").text(`"${quote}"\n- Kanye`)
    } catch (error) {
      console.error("Error in renderQuote:", error)
    }
  }

  renderPokemon(pokemon) {
    try {
      const capitalName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      $("#pokemon-img").attr("src", pokemon.image)
      $("#pokemon-name").text(`Favorite Pokemon: ${capitalName}`)
    } catch (error) {
      console.error("Error in renderPokemon:", error)
    }
  }

  renderAboutMe(text) {
    try {
      $("#about-text").text(text)
    } catch (error) {
      console.error("Error in renderAboutMe:", error)
    }
  }
}
