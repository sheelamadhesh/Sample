
var http = require('http');
var myvar = require('upper-case');
var requestListener = function (req, res) {
  res.writeHead(200);
  res.write(myvar.upperCase("node package manager!"));
  res.end();
}

var server = http.createServer(requestListener);
server.listen(3000, function() { console.log("NODE PACKAGE MANAGER!")});
