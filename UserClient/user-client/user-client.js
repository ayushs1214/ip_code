const net = require('net');
const readline = require('readline');

const client = new net.Socket();

// Set the server address and port
const serverHost = '127.0.0.1'; // Change to your server's IP address or hostname
const serverPort = 3000; // Change to your server's port

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

client.connect(serverPort, serverHost, () => {
  console.log('Connected to the server');
  rl.question('Enter a message to send to the server: ', (message) => {
    client.write(message);
    rl.close();
  });
});

client.on('data', (data) => {
  console.log(`Received from the server: ${data}`);
  client.end();
});

client.on('close', () => {
  console.log('Connection to the server closed');
});
