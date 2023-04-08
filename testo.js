const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Cliente conectado');

    setInterval(() => {
        socket.send('Mensaje test wss');
    }, 1000);
});