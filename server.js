//Building our first web server
//This is a simple Node.js program that creates an HTTP server and listens for incoming requests on port 3000.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//when you run this program and visit http://localhost:3000 in your web browser, you should see the text "Hello World" displayed in your browser.