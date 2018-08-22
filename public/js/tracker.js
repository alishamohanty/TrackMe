document.addEventListener('DOMContentLoaded', () => {
    const socket = io('/')
    const options = {
        enableHighAccuracy: true,
        maximumAge: 0
    }
    setInterval(() => {
        console.log("Inside setInterval")
        navigator.geolocation.getCurrentPosition(pos => {
            const {latitude: lat, longitude: lng} = pos.coords
            socket.emit('updateLocation', {lat, lng})
            console.log({lat, lng})
        },err => {
            console.log(err)
        }, options)
    },1000)

})