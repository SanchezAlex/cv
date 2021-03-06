$(document).ready(window.initMap = function() {
    (function () {
        var myLocation = new google.maps.LatLng(50.474118, 30.515123);
        var mapOptions = {
            center: myLocation,
            zoom: 10
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
        c.css('top', 20 + (scrolled * 0.1) + '%');
        c.css('opacity', 1 - (scrolled * 0.01) / 10);
    }

    $(".fancybox-portfolio").fancybox({
        openEffect	: 'fade',
        closeEffect	: 'fade',
        helpers: {
            overlay: {
                locked: false
            }
        }

    });

    $('.fancybox-cert').fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $(document).on('focusout', '.input-field', function() {
        if ($.trim($(this).val()) != '') {
            $(this).parent().addClass('input-filled');
        }
        else {
            $(this).parent().removeClass('input-filled');
        }
    });

});
