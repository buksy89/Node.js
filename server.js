import http from "http";
// creat a server using http modul
const server = http.createServer((request, response) => {
  console.log(request);
  response.writeHead(200, { "Content-type": "text/plain" });
  response.end("<h1>Hello Node!!!!</h1>\n");
});
// create port number 3000
const port = 3000;
// listen to the sever for incoming requests
server.listen(port, () => {
  console.log("Server runing at http://localhost:3000/");
});
