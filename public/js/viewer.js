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
})