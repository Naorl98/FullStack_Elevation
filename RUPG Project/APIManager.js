class APIManager {
    async fetchUserData() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=7")
        if (!res.ok) throw new Error("Failed to fetch user data")
        const data = await res.json()
        return {
          mainUser: data.results[0],
          friends: data.results.slice(1)
        }
      } catch (err) {
        console.error("Error fetching user data:", err)
        return null
      }
    }
  
    async fetchQuote() {
      try {
        const res = await fetch("https://api.kanye.rest")
        if (!res.ok) throw new Error("Failed to fetch quote")
        const data = await res.json()
        return data.quote
      } catch (err) {
        console.error("Error fetching quote:", err)
        return "Error fetching quote."
      }
    }
  
    async fetchPokemon() {
      try {
        const id = Math.floor(Math.random() * 1025) + 1
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!res.ok) throw new Error("Failed to fetch Pokémon")
        const data = await res.json()
        return {
          name: data.name,
          image: data.sprites.front_default
        }
      } catch (err) {
        console.error("Error fetching Pokémon:", err)
        return {
          name: "Unknown",
          image: "https://via.placeholder.com/100?text=No+Image"
        }
      }
    }
  
    async fetchMeatText() {
      try {
        const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1")
        if (!res.ok) throw new Error("Failed to fetch text")
        const data = await res.json()
        return data[0]
      } catch (err) {
        console.error("Error fetching about text:", err)
        return "No description available."
      }
    }
  }
  