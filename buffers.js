const fs = require('fs');

// Reading binary data from a file
fs.readFile('binary_data.txt', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Creating a buffer from the file data
    const buffer = Buffer.from(data);

    // Accessing and manipulating data in the buffer
    console.log('First byte in hexadecimal:', buffer[0].toString(16));
    console.log('Buffer as a string:', buffer.toString('utf8'));

    // Creating a new buffer by slicing the original buffer
    const slicedBuffer = buffer.slice(2, 6);
    console.log('Sliced buffer as a string:', slicedBuffer.toString('utf8'));

    // Comparing two buffers
    const compareBuffer = Buffer.from('Hello');
    console.log('Buffers are equal:', buffer.equals(compareBuffer));

    // Modifying data in the buffer
    buffer.write('Node.js', 6, 'utf8');
    console.log('Modified buffer as a string:', buffer.toString('utf8'));
});
