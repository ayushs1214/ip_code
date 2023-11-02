const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simulate an asynchronous operation that might throw an error
const simulateAsyncOperation = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating an error condition
      const error = new Error('Something went wrong');
      reject(error);
    }, 1000);
  });
};

// Example route that generates an error
app.get('/generate-error', async (req, res, next) => {
  try {
    await simulateAsyncOperation();
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error

  // Custom error response based on the error type
  if (err instanceof CustomError) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
});

// Custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
