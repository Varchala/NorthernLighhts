$(document).ready(function() {
    $("#about").click(function() {
        $("#panelp").slideToggle("slow");

    });

});
$(document).ready(function() {
    $("#places").click(function() {
        $("#panelq").slideToggle("slow");

    });

});
$(document).ready(function() {
    $("#video").click(function() {
        $("#panelv").slideToggle("slow");
        $('#panelv').prop("controls autoplay", true);

    });

});