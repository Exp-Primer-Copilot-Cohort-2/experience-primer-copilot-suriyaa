// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a route
// 4. Start the server

// 1. Import express
const express = require('express');
const comments = require('./comments.json');

// 2. Create an express app
const app = express();
const PORT = 3000;

// 3. Create a route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 4. Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Run the server
// node comments.js
// curl http://localhost:3000/comments
// [ { id: 1, comment: 'Hello' }, { id: 2, comment: 'World' } ]
