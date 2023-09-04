const btnEl = document.getElementById("btn");
const passEl = document.getElementById("pass");


const apiKey = "QXXdURjJl6hKqQ7lscgENQ==pxidO3hUv6SbWMZc"


const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
}

const apiUrl = 'https://api.api-ninjas.com/v1/passwordgenerator?length=10'

async function getPassword(){
    passEl.innerText= 'Generating...'
    //btnEl.disabled = 'true'
    //btnEl.innerText = 'Loading...'
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    //btnEl.disabled = 'false'
    //btnEl.innerText. = 'Create password'
    passEl.innerText = data.random_password;
    
    
};
getPassword();

btnEl.addEventListener('click', getPassword);