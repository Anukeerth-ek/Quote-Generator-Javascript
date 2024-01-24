const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote-maker");
const author = document.getElementById("author");
const forward = document.getElementById("forward");

async function getQuote(url) {
     const response = await fetch(url);

     let data = await response.json();

     console.log(data.content);
     quote.innerText = data.content;
     author.innerText = data.author;
}
getQuote(apiUrl);

forward.addEventListener("click", () => getQuote(apiUrl));
