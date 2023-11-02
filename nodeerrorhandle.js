// Add a global handler for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const fs = require('fs').promises;

// Function to read a file and handle errors synchronously (try-catch)
function readFileWithSyncErrorHandling() {
    try {
        const data = fs.readFile('nofile.txt', 'utf8');
        console.log('Sync error handling - File content:', data);
    } catch (err) {
        console.error('Sync error handling - Error:', err);
    }
}

// Callback-based error handling
function readFileWithCallback() {
    fs.readFile('abc.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Callback-based error handling:', err);
            return;
        }
        console.log('Callback-based file content:', data);
    });
}

// Promise-based error handling
function readFileWithPromises() {
    fs.readFile('abc.txt', 'utf8')
        .then((data) => {
            console.log('Promise-based file content:', data);
        })
        .catch((err) => {
            console.error('Promise-based error handling:', err);
        });
}

// Async/await error handling
async function readFileWithAsyncAwait() {
    try {
        const data = await fs.readFile('abc.txt', 'utf8');
        console.log('Async/await file content:', data);
    } catch (err) {
        console.error('Async/await error handling:', err);
    }
}

// Call the functions to demonstrate various error handling techniques
readFileWithSyncErrorHandling();
readFileWithCallback();
readFileWithPromises();
readFileWithAsyncAwait();
