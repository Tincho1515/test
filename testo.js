const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    let count = 0;
    const maxCount = 50; // Enviar el mensaje máximo 5 veces
    res.write(`<p>Hola</p>`);
    const intervalId = setInterval(() => {
        const message = '¡Hola Pepito!';
        res.write(`<p>${message}</p>`);
        count++;
        if (count >= maxCount) {
            clearInterval(intervalId);
            res.end(); // Finalizar la respuesta
        }
    }, 60 * 60 * 1000);
});

server.listen(8080);
console.log('Servidor escuchando en el puerto 8080');
