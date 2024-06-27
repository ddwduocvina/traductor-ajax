let contenidoTraducido = document.getElementById('contenidoTraduccion')
let boton = document.getElementById('traductor')
let contenedorAnimales = document.getElementById('listaAnimales')
let html

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

    $.getJSON({
        url: 'animales.json',
        success: function(respuesta){
            $.each(respuesta, function(index,animal){
                html = '<div class="col-4">';
                    html += '<div class="card">';
                        html += '<img src="'+ animal.image +'" class="card-img-top" alt="'+ animal.name +'">';
                        html += '<div class="card-body">';
                            html += '<h5 class="card-title">'+ animal.id + '.- '+ animal.name +'</h5>';
                        html += '</div>';
                    html += '</div>';
                html += '</div>';

                $('#listaAnimales').append(html);
            })
        },
        error: function(){
            contenedorAnimales.innerHTML = 'No hay animales'
        }
    })
});
