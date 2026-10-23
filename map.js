function initMap() {
    const tunis = { lat: 36.8065, lng: 10.1815 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: tunis,
        styles: [
            {
                featureType: "poi",
                stylers: [{ visibility: "off" }]
            }
        ]
    });
}
