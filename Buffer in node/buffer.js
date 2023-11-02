// Create a buffer with a fixed size
const buffer = Buffer.alloc(4); // Creates a buffer with 4 bytes

// Fill the buffer with data
buffer.writeUInt8(0x68, 0);  // Write hexadecimal value 0x68 (104 in decimal) at offset 0
buffer.writeUInt8(0x65, 1);  // Write hexadecimal value 0x65 (101 in decimal) at offset 1
buffer.writeUInt8(0x6C, 2);  // Write hexadecimal value 0x6C (108 in decimal) at offset 2
buffer.writeUInt8(0x6F, 3);  // Write hexadecimal value 0x6F (111 in decimal) at offset 3

// Convert buffer to a string
const text = buffer.toString('utf-8');
console.log('Buffer as string:', text); // Output: "hello"

// Read data from the buffer
const byte1 = buffer.readUInt8(0); // Read the byte at offset 0
console.log('Byte at offset 0:', byte1); // Output: 104

// Copy a portion of the buffer
const subBuffer = Buffer.alloc(2);
buffer.copy(subBuffer, 0, 1, 3); // Copy data from offset 1 to 3 (exclusive) into subBuffer
console.log('Copied subBuffer as string:', subBuffer.toString('utf-8')); // Output: "el"

// Concatenate buffers
const buffer1 = Buffer.from('Hello, ');
const buffer2 = Buffer.from('world!');
const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);
console.log('Concatenated buffer as string:', concatenatedBuffer.toString('utf-8')); // Output: "Hello, world!"

// Create a buffer from an array of integers
const intArray = [65, 66, 67]; // ASCII values for A, B, C
const fromArrayBuffer = Buffer.from(intArray);
console.log('Buffer from integer array:', fromArrayBuffer.toString()); // Output: "ABC"

// Working with binary data
const binaryData = Buffer.alloc(2);
binaryData.writeUInt8(0b10101010, 0); // Write binary data (0xAA)
binaryData.writeUInt8(0b11001100, 1); // Write binary data (0xCC)
console.log('Binary data buffer:', binaryData.toString('hex')); // Output: "aacc"

// Modifying buffer content
binaryData.writeInt8(-42, 0); // Overwrite the first byte
console.log('Modified buffer content:', binaryData.toString('hex')); // Output: "dacc"
