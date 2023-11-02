const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected.');

  socket.on('data', (data) => {
    console.log(`Received: ${data}`);
    const response = 'This is the received data';
    socket.write(response);
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

const PORT = 4002; // You can use the same port as in your user-client

server.listen(PORT, 'localhost', () => {
  console.log(`Server is listening on ${PORT}`);
});
