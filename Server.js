var http = require("http");

var server = http.createServer(function(req, res){
	res.writeHead(200, { "content-Type": "text/plain"});
	res.end("herlloooo")
});

server.listen(8070, function(){
	console.log("server running at port 8070")
});