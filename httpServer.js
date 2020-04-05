const { createServer } = require('http'); 

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    `<h1>Hello</h1>
    <p>You asked for <code>${req.url}</code></p>`
  );
  res.end();
});

server.listen(8000, console.log('Listening on port 8000'));