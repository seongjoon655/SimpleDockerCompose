// npm install -g ngrok

const express = require("express");
const http = require('http');
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require('socket.io');
const io = socketIO(server);
const monent = require('moment');

// 서버가 보여줄 폴더를 지정?..
app.use(express.static(path.join(__dirname,"src")));
const PORT = process.env.PORT || 8080;

console.log(__dirname);
io.on('connection',(socket)=>{
    // console.log('연결성공');    
    socket.on('chatting',(data)=>{
        // console.log(data);
        const { name, msg } = data;

        io.emit('chatting',{
            name : name,
            msg : msg,
            time : monent(new Date()).format("h:mm A")
        });
    });
});


server.listen(PORT, ()=>console.log(`server is running..${PORT}`));
