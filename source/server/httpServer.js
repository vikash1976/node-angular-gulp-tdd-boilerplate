const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1337;
http.createServer(function(req, res){
	//const url = require('url');
	//var tick = url.parse(req.url, true);
	if(req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/showDispute.html').pipe(res);
	}
	else if(req.url === '/showDispute.html'){
		console.log('Called...');
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/showDispute.html').pipe(res);
	}
	else if(req.url === '/js/showDispute.js'){
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		fs.createReadStream(__dirname + '/js/showDispute.js').pipe(res);
	}
	else if(req.url === '/js/xml2json.js'){
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		fs.createReadStream(__dirname + '/js/xml2json.js').pipe(res);
	}
	else if(req.url === '/price'){
		res.writeHead(200, {'Content-Type': 'text/html', 
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Origin': '*'});
		res.end(JSON.stringify({tick: 'RIL', price: 1002}));
		
	}
	else if(req.url === '/prices'){
		res.writeHead(200, {'Content-Type': 'text/html', 
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Origin': '*'});
		res.end(JSON.stringify([{
			tick: 'RIL', price: 1002
			},
			{
			tick: 'TCS', price: 2002
			}
			,{
			tick: 'INF', price: 1270
			},
			{
			tick: 'ICI', price: 267
			}
		]));
		
	}
	else if(req.url === '/text'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else {
		console.log('Called Non Existent...');
		res.writeHead(404, {'Content-Type': 'text/html', 
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Origin': '*'});
		res.end();
		//fs.createReadStream(__dirname + '/showDispute.html').pipe(res);
	}
}).listen(port, hostname, () => {
	console.log(`Magic happens @ http://${hostname}:${port} ... Watch`);
})















//letter to number => character set Unicode
//numbers stored in binary => encoding UTF-8 about how many bits we have to represent each number