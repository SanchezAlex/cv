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

$(document).scroll(function(){
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.intro-banner').css('top', -(scrolled * 0.1) + 'px');
    $('.intro-block').css('top', 50 + (scrolled * 0.1) + '%');
    $('.intro-block').css('opacity', 1 - (scrolled * 0.01) / 10);
    $('.intro-block').css('opacity', 1 - (scrolled * 0.01) / 10);

}
