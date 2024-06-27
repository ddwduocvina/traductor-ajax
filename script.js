$('document').ready(function(){
    $.ajax({
        url: 'ingles.html',
        type: 'get',
        success: function(respuesta){
            let contenidoTraducido = document.getElementById('contenidoTraduccion')
            contenidoTraducido.innerHTML = respuesta
        },
        error: function(){
            console.log('No carga el archivo');
        }
    })

    $('#traductor').click(function(){
        $(this).toggleClass('idioma');
    });
});
