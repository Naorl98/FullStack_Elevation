let firstPiece = { id: 101, name: 'Ofri' }
let secondPiece = { country: 'Israel' }

let fullPassport = { ...firstPiece, ...secondPiece }

console.log(fullPassport)
// { id: 101, name: 'Ofri', country: 'Israel' }
