let map
let markers = new Map()
document.addEventListener('DOMContentLoaded', () => {
    const socket = io('/')
    socket.on('locationsUpdate', locations => {
        console.log(locations)
        locations.forEach(([id, position]) => {
            const marker = new google.maps.Marker({
                position,
                map,
                title: id
            })
        if (markers.has(id)) {
            const oldMarker = markers.get(id)
            oldMarker.setMap(null);
            markers.delete(id); 
        }
    })
})
}
// function initMap() {
//     navigator.geolocation.getCurrentPosition(pos => {
//         const {latitude: lat, longitude: lng} = pos.coords
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: {lat, lng},
//             zoom: 5
//           })
//         console.log({lat, lng})
//     },err => {
//         console.log(err)
//     })  
// }