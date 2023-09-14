const btnEl = document.getElementById("btn");
const animeImgEl = document.querySelector(".anime-img")
const animeNameEl = document.querySelector(".anime-name")
const animeContainerEl = document.querySelector(".anime-container")


const apiURL = "https://catboys.com/api/img"


btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading..."
        animeNameEl.innerHTML = "Updating..."
        animeImgEl.src = "Spinner.svg"
        const response  = await fetch(apiURL)
        const data = await response.json()
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime"
        animeImgEl.src = data.url
        animeNameEl.innerHTML = data.artist
        animeContainerEl.style.display = "block"
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime"
        animeNameEl.innerHTML = "Something went wrong, please try again"
    }
 
})