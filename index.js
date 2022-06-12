const express = require('express');
var fs = require('fs')
var bodyParser = require('body-parser')
const app = express();

app.get('/',(req,res)=>{
    res.send("haha");
})
//get區域
app.get('/api',(req,res)=>{
    res.sendFile(__dirname + '/get.json'); //路由存後端資料
})
app.get('/get',(req,res)=>{
    res.sendFile(__dirname + '/get.html'); //路由前端資料取得後端資料
})
//post區域
app.get('/post',(req,res)=>{ //一般 表單 post 方法
    res.sendFile(__dirname + '/post.html');
})
app.get('/post1',(req,res)=>{ //透過 axios post 表單
    res.sendFile(__dirname + '/pots.html');
})
app.use(bodyParser.urlencoded({extended : false})) //在於接收表單時，需要使用這串middleware解析req來的訊息。
app.post('/posttest',(req,res)=>{ //接收表單
    console.log(req.body.namee);
    res.send('收到');
    fs.appendFile('test.txt', `${req.body.namee}。` , function (err) { //把收到的存入json檔中
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });
})

app.listen(8000, function () {
    console.log('Example app listening on port http://127.0.0.1:8000');
  });