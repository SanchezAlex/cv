$(document).ready(function() {
    $('.progress .progress-bar').progressbar({display_text: 'none', use_percentage: false});
});

$(document).ready(function initMap() {
    var myLocation = new google.maps.LatLng(50.474118, 30.515123);
    var mapOptions = {
        center: myLocation,
        zoom: 13
    };
    var marker = new google.maps.Marker({
        position: myLocation,
        title: "Property Location"
    });
    var map = new google.maps.Map(document.getElementById("address-map"),
        mapOptions);
    marker.setMap(map);
});
