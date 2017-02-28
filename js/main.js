/**
 * Created by daniel on 2/22/17.
 */

$(document).ready(function() {
    $('#errorMsg').hide();
    $('#successMsg').hide();
});

function initMap() {
    var uluru = {lat: 4.0510564, lng: 9.7678687};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function sendMail() {
    var senderEmail = $("#exampleInputEmail1").val();
    var subject = $("#subject").val();

    if ($('textarea#exampleTextarea') != undefined) {
        var message = $('textarea#exampleTextarea').val();
    }

    if(senderEmail == null || subject == null || message == null){
        $('#errorMsg').show();
    }

    Email.send(
        senderEmail,
        "infos@traveler.cm",
        subject,
        message,
        {token: "3d005761-1196-492d-bb47-a2098ff2c51a"});
    setTimeout(function(){
        $('#successMsg').show();
        setTimeout(function() {
            location.reload();
        }, 5000);
    }, 1000);
}