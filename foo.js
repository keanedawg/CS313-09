var http = require("http");
var url = require('url');



function onRequest(req, res) {
    console.log("got request from '" + req.url + "'")
    if (req.url == '/home' || req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Home Page</h1>');
    } 
    else if (req.url == '/getData') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write('{"name":"Br. Burton","class":"cs313"}');
    }
    else if (req.url == '/calc') {
        var queryData = url.parse(req.url, true).query;
        if(!queryData.val1 || !queryData.val2 || !queryData.type) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Arguments Incorrect: need val1 val2 and type </h1>');
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            var sum = queryData.val1 + queryData.val2;
            res.write('<h1>' + sum + '</h1>');
        }    
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>Page Not Found</h1>');
    }
    res.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server Running");