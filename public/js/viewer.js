document.addEventListener('DOMContentLoaded', () => {
    const socket = io('/')
    let map
})
function initMap() {
    navigator.geolocation.getCurrentPosition(pos => {
        const {latitude: lat, longitude: lng} = pos.coords
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat, lng},
            zoom: 5
          })
        console.log({lat, lng})
    },err => {
        console.log(err)
    })  
}