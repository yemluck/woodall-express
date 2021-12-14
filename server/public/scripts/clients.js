$(document).ready( onReady );

function onReady() {
    console.log('So damn tired');

    $('button').on('click', onClick);
}

function onClick(){
    $(this).css('background', 'green');
}