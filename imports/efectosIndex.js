var varInicio = "INICIO: <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.";

var varContacto = "CONTACTO";

var varWho = "QUIENES SOMOS";

var varFAQ = "PREGUNTAS FRECUENTES";

var varClases = "CLASES PARTICULARES";

$(document).ready(function() {
    $('#articulo').html(varInicio);

    $('#titulo').mousedown(function() {
        $('#articulo').html(varInicio);
    });

    $('#logo').mousedown(function() {
        $('#articulo').html(varInicio);
    });

    $('#indice1').mousedown(function() {
        $('#articulo').html(varInicio);
    });

    $('#indice2').mousedown(function() {
        $('#articulo').html(varContacto);
    });

    $('#indice3').mousedown(function() {
        $('#articulo').html(varWho);
    });

    $('#indice4').mousedown(function() {
        $('#articulo').html(varFAQ);
    });

    $('#indice5').mousedown(function() {
        $('#articulo').html(varClases);
    });
    
    $('#logo, #indice1, #indice2, #indice3, #indice4, #indice5').mouseenter(function() {
        $(this).css("box-shadow", "0px 0px 0px #4a4a4a");
    });

    $('#logo, #indice1, #indice2, #indice3, #indice4, #indice5').mouseleave(function() {
        $(this).css("box-shadow", "2px 2px 2px #4a4a4a");
    });
});