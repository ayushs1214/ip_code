const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse the request body as JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <form action="/">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  // Get the username from the request body
  const username = req.body.username;

  // Clear the username field
  req.body.username = '';

  // Redirect the user back to the login page
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
