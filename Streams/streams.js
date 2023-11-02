const fs = require('fs');

// Create a readable stream to read data from the source file
const readableStream = fs.createReadStream('source.txt');

// Create a writable stream to write data to the destination file
const writableStream = fs.createWriteStream('destination.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle the 'finish' event to know when copying is complete
writableStream.on('finish', () => {
  console.log('Copying complete.');
});

// Handle errors using the 'error' event
readableStream.on('error', (err) => {
  console.error('An error occurred while reading:', err);
});

writableStream.on('error', (err) => {
  console.error('An error occurred while writing:', err);
});
