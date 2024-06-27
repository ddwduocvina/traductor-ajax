$.ajax({
    url: 'ingles.html',
    type: 'get',
    success: function(respuesta){
        console.log(respuesta)
    },
    error: function(){
        console.log('No carga el archivo');
    }
})