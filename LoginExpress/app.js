const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from a 'public' directory

// Define a route to serve the login form
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Define a route to handle login form submissions
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check the username and password (replace with your authentication logic)
  if (username === 'user' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Login failed. Please check your username and password.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
