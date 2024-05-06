const http = require('http')
const express = require('express')

const {Server: SocketServer} = require('socket.io')

const app = express();
const server = http.createServer(app);

const io = new SocketServer({
    cors : '*'
})


server.listen(9000, ()=> console.log('Docker Server is Running on port 9000'))