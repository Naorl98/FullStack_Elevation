const apiKey = "pBnZNiSyxhL9gS8r0eTxeud1JwEo92d8" 

$("#search-btn").on("click", function () {
  const query = $("#search-input").val().trim()
  console.log(`Searching for: ${query}`)

  if (!query) return
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=1`

  $.get(url, function (response) {
    if (response.data.length > 0) {
      const embedUrl = response.data[0].embed_url
      const iframe = `<iframe src="${embedUrl}" width="480" height="270" frameborder="0" allowfullscreen></iframe>`
      $("#gif-container").html(iframe)
    } else {
      $("#gif-container").html("<p>No GIFs found.</p>")
    }
  }).fail(() => {
    $("#gif-container").html("<p>Error retrieving GIF.</p>")
  })
})