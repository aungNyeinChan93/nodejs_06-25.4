import { createServer } from "http";

const routes = {
    '/': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    },
    "/about": (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    },
    'notFound': (req, res) => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found Page');
    }
}

const server = createServer((req, res) => {
    // const routeHandler = routes[req.url] || routes['notFound'];
    // routeHandler(req, res);
    if (routes[req.url]) {
        routes[req.url](req, res);
    }
    else {
        routes['notFound'](req, res);
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});