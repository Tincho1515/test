const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Mensajes cada 10 segundos:\n');
  setInterval(() => {
    res.write('¡Hola! Este mensaje se envía cada 10 segundos.\n');
  }, 10000);
});

server.listen(8080);
console.log('Servidor escuchando en el puerto 8080');
