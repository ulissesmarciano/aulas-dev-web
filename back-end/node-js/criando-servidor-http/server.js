const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
})

server.listen(3000, () => {
    console.log('Servidor em execução em http://localhost:3000/')
})