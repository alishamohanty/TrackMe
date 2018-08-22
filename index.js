const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const locationMap = new Map()
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.send("Hello!!")
})
io.on('connection', socket => {
    locationMap.set(socket.id, { lat: null, lng: null})
    socket.on('updateLocation', (pos) => {
        if(locationMap.has(socket.id)){
            locationMap.set(socket.id, pos)
            console.log(locationMap)
        }
    })
}

)
server.listen(3000, (err) => {
    if(err) {
        console.log("Error happened", err)
        throw err
    }
    console.log("Listening to port 3000")
})