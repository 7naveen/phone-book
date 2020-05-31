const http = require('http');
const port = 8000;

function requestandler(req, res) {
    console.log(req.url);
    res.end('Gotcha');
}
const server = http.createServer(requestandler);

server.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("server is running on port :", port);
});