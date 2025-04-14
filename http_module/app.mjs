import { createServer } from "http";

const server = createServer((req, res) => {
    res.writeHead(200, 'success', { 'content-type': 'text/plain' });
    res.end('Hello world');
})

server.listen(3000);