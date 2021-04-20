const http = require('http');

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('hello Node Server!');
}
const server = http.createServer(requestHandler);// pointer to the function requesrhandler

server.listen(5000);