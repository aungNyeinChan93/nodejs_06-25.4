import http, { createServer } from 'http';

const port = 3000;
const server = createServer((req, res) => {



    if (req.url === '/') {
        res.writeHead(200, 'success', { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    }

    if (req.url === '/api') {
        res.writeHead(200, 'success', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello API' }));
    }

    if (req.url === '/api/posts') {
        res.writeHead(200, 'All Posts', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            title: 'Post 1',
            body: 'This is the body of post 1'
        }))
    }
});

server.listen(port, () => {
    console.log('Server running at http://localhost:3000/');
});

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log(JSON.parse(data)));
    res.on('error', err => console.error(err));
});

