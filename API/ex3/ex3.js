function fetch(queryType, queryValue) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`
  $.get(url, function (data) {
    const items = data.items || []

    items.forEach(book => {
      const title = book.volumeInfo.title
      const authors = book.volumeInfo.authors?.join(", ") || "Unknown"
      const industryIds = book.volumeInfo.industryIdentifiers || []
      const isbn = industryIds.find(id => id.type.includes("ISBN"))?.identifier || "N/A"

      console.log(`Title: ${title}\n Author(s): ${authors}\n ISBN: ${isbn}\n---`)
    })
  })
}
