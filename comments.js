// Create web server
// Create a web server using the http module
const http = require('http');
const fs = require('fs');

// Create a server object
http.createServer(function (req, res) {
  // Read the file
  fs.readFile('index.html', function(err, data) {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Write the content to the response body
    res.write(data);
    // End the response
    res.end();
  });
}).listen(8080); // The server object listens on port 8080

// Run the server by running the following command in the terminal
// node comments.js
// Open the browser and enter the following URL
// http://localhost:8080
