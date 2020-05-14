function initMap() {
  var myLatLng = {lat: 52.039673, lng: 4.337959};

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng
  });

  var epoMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "EPO - European Patent Office"
  });

  var cgdMarker = new google.maps.Marker({
      position: {
          lat: 38.741374, 
          lng: -9.141607
        },
      map: map,
      title: "Caixa Geral de Depósitos" 
  });

  var novoBancoMarker = new google.maps.Marker({
      position: {
          lat: 38.750300, 
          lng: -9.306660
        },
      map: map,
      title: "Novo Banco Sistemas de Informação" 
  });

  var angolaMarker = new google.maps.Marker({
      position: {
          lat: -8.814512, 
          lng: 13.227454
        },
      map: map,
      title: "1K4S - Luanda"
  });

  var inokMarker = new google.maps.Marker({
      position: {
          lat: 38.771612, 
          lng: -9.097277
        },
      map: map,
      title: "INOK Consulting" 
  });

  var asMarker = new google.maps.Marker({
      position: {
          lat: 38.722314, 
          lng: -9.304665
        },
      map: map,
      title: "2AS - Advanced Solutions S.A." 
  });

  var hiperbitMarker = new google.maps.Marker({
      position: {
          lat: 38.718554, 
          lng: -9.305477
        },
      map: map,
      title: "Hiperbit - Sistemas de Informação S.A." 
  });
}