/*Initializes the default map when the page is loaded. Shows the company where Andre is currently working.
Includes a marker and a info window when the building icon is clicked */

function initMap() {
  var myLatLng = {lat: 52.039673, lng: 4.337959};

  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 10
  });

    var contentString = "<div id='content'><p><b>EPO</b> is the executive body of the European Patent Organisation. It grants European patents for the Contracting States to the European Patent Convention.</p></div>";
    

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "EPO - European Patent Office",
        icon: buildingMarker
    });
 
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
};


 var buildingMarker = "http://maps.google.com/mapfiles/kml/pal3/icon21.png"

 
/*The following code renders the map with the correspondent information of each company when said company or the role is clicked.
Also includes the info window when the building ícon is clicked*/

function renderMap(element) {
   var title = $(element).data("title");
   var positionlat = $(element).data("positionlat");
   var positionlng = $(element).data("positionlng");
   var contentString = $(element).data("content");
   
   
    map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: positionlat, lng: positionlng },
                zoom: 10
            });

             var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

             var marker = new google.maps.Marker({
                position: { lat: positionlat, lng: positionlng },
                map: map,
                title: title, 
                icon: buildingMarker
                });

             marker.addListener("click", function() {
                infowindow.open(map, marker);
            });
     
};