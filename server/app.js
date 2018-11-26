var express=require('express');
var bodyparser=require('body-parser');
var fs=require('fs');
var path=require('path')
var app=express();
var users=require('./routes/users');

app.use('/user',users);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.get('/',function(req,res){
    res.send(fs.readFileSync(path.resolve('/','../public/index.html'),'utf-8'))
})
app.listen(8080,function(){
    console.log('it is running')
})