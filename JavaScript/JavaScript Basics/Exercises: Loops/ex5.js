const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

const letters = Object.keys(dictionary)

for (let letter of letters) {
  console.log("Words that begin with " + letter + ":")
  const words = dictionary[letter]
  for (let word of words) {
    console.log("    " + word)
  }
}
