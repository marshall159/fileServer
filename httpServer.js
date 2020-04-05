const { createServer } = require('http'); 

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  req.on('data', chunk => 
    res.write(chunk.toString().toUpperCase()));
  req.on('end', () => res.end());
})
  .listen(8000, console.log('Listening on port 8000'));