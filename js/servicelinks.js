

$(document).ready(function(){

    // Check if there is a location hash
    var hash = window.location.hash;
    console.log("hash", hash);

    if (hash && $(hash).length) {
        $("#about").hide();
        $(hash).show();
        window.location.href = hash;
    }

    $(".goButton").click(function(){
        $("#about").hide();
        var to = $(this).data("to");
        $(".service_wrapper").hide();
        $("#" + to).show();
        window.location.href='#' + to;
    });

    $(".back-service").click(function(){
        $(".slide-testi").hide();
        $("#about").show();
        window.location='#about';
        window.location.href='#about';
    });
});

