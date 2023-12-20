const responseDiv = document.getElementById("responseDiv");
const image = document.getElementById("image");
const gifSearch = document.getElementById("gifSearch");
const reloadButton = document.getElementById("reloadButton");

reloadButton.addEventListener("click", async function () {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=rUNNT3lMDBa7MjCVWPNPQW4Od0v0Tifi&s=${gifSearch.value}`,
    {
      mode: "cors",
    }
  );
  response
    .json()
    .then(function (response) {
      image.src = response.data.images.original.url;
      image.style.visibility = "visible";
    })
    .catch(function (reject) {
      responseDiv.innerHTML = reject;
    });
});
