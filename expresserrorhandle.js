const express = require('express');
const fs = require('fs');

const app = express();

// Define the err variable in the main function
let err;

// Handle errors thrown by the fs module
app.use((req, res, next) => {
  // Pass the err variable to the callback function
  fs.readFile('./file.txt', (err, data) => {
    if (err) {
      // Log the error
      console.error(err.stack);

      // Send a specific error response to the client
      res.status(404).send('File not found');
    } else {
      // Send the data to the client
      res.send(data);
    }
  });
});

app.listen(4001, () => {
  console.log('Server listening on port 4001');
});

// C:\Users\Arnav\OneDrive\Documents\GitHub\codepipeline_repo\express-login-form