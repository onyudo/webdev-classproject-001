const express = require('express');
const axios = require('axios');
const path = require('path');

// Initialize the express app
const app = require('express');
const port = process.env.PORT || 3000;

// Put Unsplash API Key here BUT DELETE OFF BEFORE PUSHING TO GITHUB
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';
const UNSPLASH_URL = 'https://api.unsplash.com/photos/random';

// Static files serving the frontend, HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')));

// Serve a random quote and pull a random image in from Unsplash
/*
The line app.get('/api/quote', async (req, res) => { defines an Express.js route that listens for GET requests at /api/quote. When a request is received, it triggers an asynchronous function, allowing the server to perform non-blocking operations (like fetching data from an external API for a quote and an image) without delaying other tasks. Once the data is retrieved, the function sends the result back in the response.
*/
app.get('/api/quote', async (req, res) => {
    const quotes = [
        { quote: "Not until we're totally crushed do we show what we are made of.", author: "Bohumil Hrabal" },
        { quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.", author: "Albert Camus" },
        { quote: "All we have to decide is what to do with the time that is given us.", author: "J.R.R. Tolkien" },
        // add more quotes here
    ];

    
// Randomly choose a quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    try {
        // Fetch a random image from Unsplash using the "Japanese Forest" keyword
        const response = await axios.get(UNSPLASH_URL, {
            params: {
                query: 'Japanese Forest',
                // DELETE OFF API LEY BEFORE PUSHING TO GITHUB!
                client_id: UNSPLASH_ACCESS_KEY,
                orientation: 'landscape',
            },
        });

        const imageUrl = response.data[0].urls.regular; // Get the regular-sized image

        // Send the quote and image data to the frontend
        res.json({
            quote: randomQuote.quote,
            author: randomQuote.author,
            imageUrl: imageUrl,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch image or quote' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});