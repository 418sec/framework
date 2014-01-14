var framework = require('total.js');
var http = require('http');

var port = 8004;
var debug = true;

framework.run(http, debug, port);

// Documentation: http://docs.totaljs.com/Framework/#framework.test
framework.test(true, function() {
	console.log('SUCCESSS');
});