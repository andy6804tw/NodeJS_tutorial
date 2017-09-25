var http=require('http');
var server=http.createServer(engine);

server.listen(1337,function(){
    console.log("success creade!");
})

function engine(request,response){
    response.writeHead(200,{"Content-Type":"text/plan"});
    response.end("Hello"+request.url);
}