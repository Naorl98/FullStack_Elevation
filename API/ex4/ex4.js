const apiKey = "pBnZNiSyxhL9gS8r0eTxeud1JwEo92d8" 
const url = `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${apiKey}&limit=1`

$.get(url, function(response) {
  const embedUrl = response.data[0].embed_url
  const iframe = `<iframe src="${embedUrl}" width="480" height="270" frameborder="0" allowfullscreen></iframe>`
  $("#gif-container").html(iframe)
})
