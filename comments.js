// Create web server
// - create a new express app
// - create a new route for GET /comments
// - send back a JSON response with some comments
// - start the server on port 3000
// - test the route in the browser

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.json([
        { username: 'Todd', comment: 'lololol' },
        { username: 'Skyler', comment: 'lmao' },
        { username: 'Sk8erBoi', comment: 'rofl' }
    ]);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});