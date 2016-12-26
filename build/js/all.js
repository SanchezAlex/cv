function validEmail(email) { // see:
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
// get all data in form and return object
function getFormData() {
    var elements = document.getElementById("feedback-form").elements; // all form elements
    var fields = Object.keys(elements).map(function(k) {
        if(elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        }else if(elements[k].length > 0){
            return elements[k].item(0).name;
        }
    }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k){

        data[k] = elements[k].value;
        if(elements[k].type === "checkbox"){
            data[k] = elements[k].checked;
            // special case for Edge's html collection
        }else if(elements[k].length){
            for(var i = 0; i < elements[k].length; i++){
                if(elements[k].item(i).checked){
                    data[k] = elements[k].item(i).value;
                }
            }
        }
    });
    console.log(data);
    return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
    event.preventDefault();           // we are submitting via xhr below
    var data = getFormData();         // get the values submitted in the form
    if( !validEmail(data.Email) ) {   // if email is not valid show error
        document.getElementById('email-invalid').style.display = 'block';
        return false;
    } else {
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            document.getElementById('feedback-form').style.display = 'block'; // hide form
            document.getElementById('feedback_thanks').style.display = 'block';
            return true;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&');
        xhr.send(encoded);
    }
}
function loaded() {
    console.log();
    // bind to the submit event of our form
    var form = document.getElementById('feedback-form');
    form.addEventListener("submit", handleFormSubmit, false);
}
document.addEventListener('DOMContentLoaded', loaded, false);
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
