import http, { createServer } from 'http';
import url from 'url';

const port = 3000;
const server = createServer((req, res) => {

    // if (req.url === '/') {
    //     res.writeHead(200, 'success', { 'Content-Type': 'text/plain' });
    //     res.end('Hello World\n');
    // }

    // if (req.url === '/api') {
    //     res.writeHead(200, 'success', { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({ message: 'Hello API' }));
    // }

    // if (req.url === '/api/posts') {
    //     res.writeHead(200, 'All Posts', { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({
    //         title: 'Post 1',
    //         body: 'This is the body of post 1'
    //     }))
    // }

    // if (req.url === "/dashboard" && req.method === "GET") {
    //     res.writeHead(200, 'dashboard', { "content-type": "text/html" });
    //     res.write("<h1>Dashboard</h1>");
    //     res.write("<p>Welcome to the dashboard</p>");
    //     res.end(`<a href="/">Go to home</a>`);
    // } else {
    //     res.writeHead(404, 'not found', { 'Content-Type': 'text/plain' });
    //     res.end('404 Not Found\n');
    // }

    // if (req.url === '/api/create' && req.method === 'POST') {
    //     let body = '';
    //     req.on('data', (chunk) => {
    //         body += chunk.toString(); // convert Buffer to string 
    //     })
    //     req.on('end', () => {
    //         res.writeHead(200, 'create success', { 'Content-Type': 'application/json' });
    //         res.end(JSON.stringify({ message: 'Post created', data: JSON.parse(body) }));
    //     })
    // } else {
    //     res.writeHead(404, 'not found', { 'Content-Type': 'text/plain' });
    //     res.end('404 Not Found\n');
    // }

    if (req.url.startsWith('/filter') && req.method === 'GET') {
        const query = url.parse(req.url, true).query;
        res.writeHead(200, 'success', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            result: query
        }));
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

