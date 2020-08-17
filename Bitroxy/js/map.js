function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
      center: new google.maps.LatLng(18.4279, 58.2708),
    zoom: 5
  };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker1 = new google.maps.Marker({
        position: { lat: 23.4241, lng: 53.8478 }, // Brooklyn Coordinates
        map: map, //Map that we need to add
        icon: 'img/bitroxy-logo.png',
        draggarble: false// If set to true you can drag the marker
    });

    var marker2 = new google.maps.Marker({
        position: { lat: 10.8505, lng: 76.2711 }, // Brooklyn Coordinates
        map: map, //Map that we need to add
        icon: 'img/bitroxy-logo.png',
        draggarble: false// If set to true you can drag the marker
    });
}
