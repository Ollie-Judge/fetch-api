const img = document.querySelector("img");
const image = document.getElementById("image");
const reloadButton = document.getElementById("reloadButton");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=rUNNT3lMDBa7MjCVWPNPQW4Od0v0Tifi&s=cats",
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    image.src = response.data.images.original.url;
  });

reloadButton.addEventListener("click", function () {
  location.reload();
});
