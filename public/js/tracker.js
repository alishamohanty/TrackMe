document.addEventListener('DOMContentLoaded', () => {
    const socket = io('/')

    const options = {
        enableHighAccuracy: true,
        maximumAge: 0
    }

    socket.emit('registerTracker')

    setInterval(() => {
        console.log("Inside setInterval")
        navigator.geolocation.getCurrentPosition(pos => {
            const {latitude: lat, longitude: lng} = pos.coords
            socket.emit('registerTracker', {lat, lng})
            console.log({lat, lng})
        },err => {
            console.log(err)
        }, options)
    },10000)

})