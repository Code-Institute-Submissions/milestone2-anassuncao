function initMap() {
  var myLatLng = {lat: 52.039673, lng: 4.337959};

  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 10
  });


  var epoMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "EPO - European Patent Office",
    icon: buildingMarker
  });
};

 var buildingMarker = "http://maps.google.com/mapfiles/kml/pal3/icon21.png"

 
//The following code should render the map when the company name or the role is clicked.

function renderMap(element) {
   var title = $(element).data("title");
   var positionlat = $(element).data("positionlat");
   var positionlng = $(element).data("positionlng");
   
   
    map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: positionlat, lng: positionlng },
                zoom: 10
            });

             var marker = new google.maps.Marker({
                position: { lat: positionlat, lng: positionlng },
                map: map,
                title: title, 
                icon: buildingMarker
                });
     
        };