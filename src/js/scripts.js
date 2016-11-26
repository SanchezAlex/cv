$(document).ready(function() {
    $('.progress .progress-bar').progressbar({display_text: 'none', use_percentage: false});
});

$(document).ready(function initMap() {
    (function () {
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
    })();


    $(document).scroll(function(){
        parallax();
    });

    var b = $('.intro-banner');
    var w = $(window);
    var c = $('.intro-block');

    function parallax() {
        var scrolled = w.scrollTop();
        b.css('transform', 'translate3d(0, ' + -(scrolled * 0.1) + 'px, 0)');
        // $('.intro-block').css('top', 20 + (scrolled * 0.1) + '%');
        c.css('opacity', 1 - (scrolled * 0.01) / 10);
        // $('.intro-block').css('opacity', 1 - (scrolled * 0.01) / 10);
    }

    $('.fancybox-media').fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        helpers : {
            media : {}
        }
    });
});
