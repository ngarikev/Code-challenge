const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")



async function getQuote(){
    try {
    quoteEl.innerHTML = "Updating..."
    authorEl.innerHTML = "Updating..."
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading..."
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json()
    btnEl.disabled = false;
    btnEl.innerHTML = "Get a quote"
    quoteEl.innerHTML = data.content
    authorEl.innerHTML = `~ `+ data.author
        
    } catch (error) {
        quoteEl.innerHTML = "An error happened please try again later"
        authorEl.innerHTML = "An error happened please try again later"
        btnEl.disabled = false;
        btnEl.innerHTML = "Get a quote"
        
    }
    
}

getQuote()





btnEl.addEventListener("click", getQuote)