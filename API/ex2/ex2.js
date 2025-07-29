function fetch(queryType, queryValue) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`
  $.get(url, function (data) {
    console.log(data)
  })
}

fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")
