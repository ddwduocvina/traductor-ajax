let contenidoTraducido = document.getElementById('contenidoTraduccion')
let boton = document.getElementById('traductor')

$('document').ready(function(){
    $.ajax({
        url: 'ingles.html',
        type: 'get',
        success: function(respuesta){
            contenidoTraducido.innerHTML = respuesta
        },
        error: function(){
            console.log('No carga el archivo');
        }
    })

    $('#traductor').click(function(){
        $(this).toggleClass('idioma');

        if(boton.getAttribute('class','idioma')){
            $.get({
                url: 'espanol.html',
                success: function(respuesta){
                    contenidoTraducido.innerHTML = respuesta
                    boton.innerText = 'Traducir'
                }
            })
        } else {
            $.get({
                url: 'ingles.html',
                success: function(respuesta){
                    contenidoTraducido.innerHTML = respuesta
                    boton.innerText = 'Translate'
                }
            })
        }
    });
});
