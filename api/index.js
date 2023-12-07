const http = require('http')

http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify({nmae:'birbal kumar',email:'birbal@gmail.com'}));
res.end();
}).listen(8000);