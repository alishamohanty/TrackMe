document.addEventListener('DOMContentLoaded', () => {
    const options = {
        enableHighAccuracy: true,
        maximumAge: 0
    }
    const socket = io('/')
    navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos)
    },err => {
        console.log(err)
    }, options)
})