const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received from client: ${data}`);
    socket.write(`Server received: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const serverPort = 3000; // Port for the server to listen on

server.listen(serverPort, () => {
  console.log(`Server is listening on port ${serverPort}`);
});
