// Create web server and listen to port 8080.
// Create a route that responds to GET requests to the /comments path.

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('This is a GET request to /comments');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
