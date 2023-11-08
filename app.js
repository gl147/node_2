const http = require("http");

const server = http.createServer((req, res) => {
  console.log("hello");
  console.log(req.url);
});

server.listen(3000);
console.log("run");
