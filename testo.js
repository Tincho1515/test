const http = require('http');

const server = http.createServer((req, res) => {
  const today = new Date().toLocaleDateString();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>La fecha actual es ${today}</h1>`);
  res.end();
});

server.listen(3000, () => {
  console.log('Servidor web iniciado en el puerto 3000');
});
