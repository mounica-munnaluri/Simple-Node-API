var express=require("express");
var app=express();
var server=require('http').createServer(app);
var cors=require("cors");

app.use(cors());

server.listen(3000,function(){
    console.log("Server runing at 3000...");
});

app.get('/Sum',function(req,res){
    var a=req.query.a;
    var b=req.query.b;
    var c=parseInt(a)+parseInt(b);
    
    //res.write(String(c));
    res.json(c);
    res.end();
});
