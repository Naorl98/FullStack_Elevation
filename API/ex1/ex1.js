function fetch(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  $.get(url, function (data) {
    console.log(data)
  })
}

fetch(9780575087057) 