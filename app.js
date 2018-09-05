var express = require('express');
var app = express();

// setup ports
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function(req, res) {
	res.end('Hello YouTube!');
});

// server listens in on port
app.listen(server_port, function () {
 	console.log("Listening on " + server_ip_address);
});
