const { request } = require('http'); 

request({
  hostname: 'localhost',
  port: 8000,
  method: 'POST',
}, res => {
  res.on('data', chunk => {
    process.stdout.write(chunk.toString());
  })
})
  .end('Hello server');
