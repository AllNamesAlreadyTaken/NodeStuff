var os = require('os');
var fs = require("fs");
var http = require('http');



var allInfoOS = function(){
	console.log('Summary by MCH:\n Temp Files Location: ' + os.tmpdir() + '\n');             // Returns the operating system's default directory for temp files.
	console.log(' Endianness of CPU: ' + os.endianness() + '\n');         // Returns the endianness of the CPU. Possible values are "BE" or "LE".
	console.log(' HOST name: ' + os.hostname() + '\n');           // Returns the hostname of the operating system.
	console.log(' OS name: ' + os.type() + '\n');               // Returns the operating system name.
	console.log(' OS platform: ' + os.platform() + '\n');           // Returns the operating system platform.
	console.log(' OS release: ' + os.release() + '\n');            // Returns the operating system release.
	console.log(' CPU Arch: ' + os.arch() + '\n');               // Returns the operating system CPU architecture.
	console.log(' Sys curr UpTime: ' + os.uptime() + '\n');             // Returns the system uptime in seconds.
	console.log(' Load averages: ' + os.loadavg() + '\n');            // Returns an array containing the 1, 5, and 15 minute load averages.
	console.log(' Sys mem inBytes: ' + os.totalmem() + '\n');           // Returns the total amount of system memory in bytes.
	console.log(' Free mem inBytes: ' + os.freemem() + '\n');            // Returns the amount of free system memory in bytes.
	console.log(' cpu by core Vals: ' + os.cpus() + '\n');               // Returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).
	console.log(' netInterfaces: ' + os.networkInterfaces() + '\n');  // Get a list of network interfaces.
	console.log(' EOL marker for sys: ' + os.EOL + '\n');                  // A constant defining the appropriate End-of-line marker for the operating system.
	console.log('Additional commands can be configured in the "instructionsForOS.js file."'); //Names file
	console.log('value: ' + 'newOSfunctionIfDesired'); //Add a new if desired or created
	console.log('END OS Details -- END'); //Echo "End System Details -- END" to validate end of processed
};

var allInfoFS = function(){
	console.log("\n Ran from directory: " + '\n');
	console.log(__dirname);
	console.log("\n Using js file: " + '\n');
	console.log(__filename);
	console.log('END FS details -- END - finsihed');
};


//For reference on nodeJS - OS api find below:
// http://nodejs.org/api/os.html
(function(){
allInfoOS();
allInfoFS();
})();


// An example of a web server written with Node which responds with 'Hello World'.
// To run the server, put the code into a file called example.js and execute it with the node program.
var portNo = 8124;
http.createServer(function (req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end('');
}).listen(portNo);

console.log('Server running at http://127.0.0.1:' + portNo + '/');
