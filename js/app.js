//JavaScript

const quotes = [
    { quote: "Not until we're totally crushed do we show what we are made of.", author: "Bohumil Hrabal" },
    { quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.", author: "Albert Camus" },
    { quote: "All we have to decide is what to do with the time that is given us.", author: "J.R.R. Tolkien" },
    // add more quotes here
];

const quoteElement = document.getElementsByClassName("random-quote")[0]; // Access the first element of this class
const authorElement = document.getElementsByClassName("source")[0]; // Access the first element of this class


// function generate random quote
function getRandomQuote() {

    // randomly choose a quote from the array of quotes. The random # generator from the JS final is a starting point
    const randomIndex = Math.floor(Math.random() * quotes.length); // use length to count the number of quotes

    // assign the randomly chosen quote to another constant variable?
    const quote = quotes[randomIndex];

    // use innerText to output quote to HTML document
    quoteElement.innerText = quote.quote;

    // user innerText to output author to HTML document
    authorElement.innerText = quote.author;
}

// Is there a way to have the quotes "play" for a short amount of time and rotate randomly?

// render the randomly chosen quote and author combo to the HTML document
// found this on Stack Overflow
// This event fires when the entire page, including all dependent resources like images and stylesheets, has finished loading.
window.addEventListener('load', function() {
    getRandomQuote();
});