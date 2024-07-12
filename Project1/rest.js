function initMap() {
    // Replace with your desired map coordinates
    const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 15
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker or other map customizations if needed
    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: 'Restaurant Name'
    });
}