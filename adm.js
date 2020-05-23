
function info( fase ) {

    $('#fase-togaf').hide();
    $('#togaf-intro').hide();
    $('#togaf-pages').show();

        $.ajax({
            url: 'store.json',
            type: 'GET',
            dataType: 'json',
        })
        .done(function( data ) {

            console.log( data );
            console.log( data[fase].titulo );

            // html
            $("#titulo-fase").html( data[fase].titulo );
            $("#resumen-fase").html( data[fase].resumen );
            $('#img-fase').attr('src', data[fase].img );

            //btninfo
            if( data[fase].modal.active ) {
                $('#btninfo').show();
            } else {
                $('#btninfo').hide();
            }

            // Modal
            $("#modal-titulo").html( data[fase].modal.titulo );
            $('#modal-resumen').html( data[fase].modal.resumen );
            $('#img-modal').attr('src', data[fase].modal.img );

            // Let's go ...
            $('#fase-togaf').show();

        })
        .fail(function( e ) {
            console.log("error", e);
        });

}
