var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.039673, lng: 4.337959},
        zoom: 11
    });
}

/*
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 38.741116, lng: -9.141707 },
        { lat: 38.750266, lng: -9.306670 },
        { lat: -8.824064, lng: 13.227603 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.marker({
            position: location,
            label: label[i % labels.length]
        });
    });

     var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

     */