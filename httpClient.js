const { request } = require('http'); 

let requestStream = request({
  hostname: 'localhost',
  port: 8000,
  method: 'GET',
  headers: {Accept: 'text/html'}
}, res => {
  console.log(`Server responded with status code: ${res.statusCode}`);
});

requestStream.end();
