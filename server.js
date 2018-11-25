const http = require('http');
const nodeStatic = require('node-static');

const file = new nodeStatic.Server('.', {
  cache: 0,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
});

const accept = (req, res) => {
  if (req.url.startsWith('/api')) {

    setTimeout(() => {
      file.serve(req, res);
    }, 500);

  } else {
    file.serve(req, res);
  }
};

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');
