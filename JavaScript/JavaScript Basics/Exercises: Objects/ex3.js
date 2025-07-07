const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const Fistnrame = "Bob" 
const inputname = Fistnrame[0].toUpperCase() + Fistnrame.slice(1).toLowerCase()

if (reservations[inputname]) {
  if (reservations[inputname].claimed === false) {
    console.log("Welcome, " + inputname)
  } else {
    console.log("Hmm, someone already claimed this reservation")
  }
} else {
  reservations[inputname] = { claimed: true }
  console.log("You have no reservation, but we added you now. Welcome, " + inputname)}
