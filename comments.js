// Create web server

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run server: node comments.js
// Open browser and go to http://localhost:3000