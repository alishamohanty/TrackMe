const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.send("Hello!!")
})

server.listen(3000, (err) => {
    if(err) {
        console.log("Error happened", err)
        throw err
    }
    console.log("Listening to port 3000")
})