const http = require('http');

const server = http.createServer((req, res) => {
    // res.writeHead(200, 'Success', { 'content-type': "application/json" });
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain')
    res.end('Hello World');
})

server.listen(3000, (err) => {
    console.log(`Server is running in port 3000`);
    init();
})

// init
const init = () => {
    http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
        let data = ""
        res.on('data', (chuck) => {
            console.log(typeof chuck);
            data += chuck
        })
        res.on('end', () => {
            console.log(JSON.parse(data));
        })
    }).on('error', (err) => {
        console.error(err.message)
    })
}