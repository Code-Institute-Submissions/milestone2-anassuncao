function initMap() {
  var myLatLng = {lat: 52.039673, lng: 4.337959};

  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 10
  });

  var epoMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "EPO - European Patent Office"
  });
};

document.getElementById("vmw-admin").addEventListener("click", moveMapToCgd)

function moveMapToCgd() {
    map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 38.741374, lng: -9.141607 }, //CGD
                zoom: 10
            });

             var cgdMarker = new google.maps.Marker({
                position: {
                            lat: 38.741374, 
                            lng: -9.141607
                        },
                map: map,
                title: "Caixa Geral de Depósitos" 
                });
        };

document.getElementById("team-lead").addEventListener("click", moveMapToEpo)

function moveMapToEpo() {
    map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 52.039673, lng: 4.337959 }, //EPO
                zoom: 10
            });

             var novoBancoMarker = new google.maps.Marker({
                position: {
                            lat: 52.039673, 
                            lng: 4.337959
                        },
                map: map,
                title: "EPO - European Patent Office" 
                });
        };

  /*
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
*/


/*----------------OUTRO MAPA PARA USAR COM O JQUERY FAZENDO APARECER E DESAPARECER CONFORME CLICKS


  var map = new google.maps.Map(document.getElementById("map1"), {
    zoom: 10,
    center: {lat: 38.741374, lng: -9.141607}
  });
  
  var cgdMarker = new google.maps.Marker({
      position: {
          lat: 38.741374, 
          lng: -9.141607
        },
      map: map,
      title: "Caixa Geral de Depósitos" 
  });
}
----------------------------------------------------------*/



/* ---------------------OBJECTO COM AS LOCALIZAÇÕES DE TODAS AS EMPRESAS PARA O CASO DE SER PRECISO
let companyLocations = [{
        country: "Nederland",
        name: "EPO - European Patent Office",
        lat: 52.039673,
        lng: 4.337959,
    },
    {
        country: "Portugal",
        name: "CGD - Caixa Geral de Depósitos",
        lat: 38.741374, 
        lng: -9.141607
    },
    {
        country: "Portugal",
        name: "Novo Banco - Sistemas de Informação",
        lat: 38.750300, 
        lng: -9.306660
    },
    {
        country: "Angola",
        name: "1K4S - Luanda",
        lat: -8.814512, 
        lng: 13.227454
    },
    {
        country: "Portugal",
        name: "INOK Consulting",
        lat: 38.771612, 
        lng: -9.097277
    },
    {
        country: "Portugal",
        name: "2AS - Advanced Solutions S.A.",
        lat: 38.722314, 
        lng: -9.304665
    },
    {
        country: "Portugal",
        name: "Hiperbit - Sistemas de Informação S.A.",
        lat: 38.718554, 
        lng: -9.305477
    },
] 

----------------------------------------------------*/



