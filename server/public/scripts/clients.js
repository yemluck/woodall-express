/**
 * This code is running on client's computer
 */



$(document).ready( onReady );

function onReady() {
    console.log('So damn tired');

    $('button').on('click', onClick);

    // TODO by 5pm today
    // Write some code to get data from the 
    // GET /comments endpoint
    // and then render that data to the DOM

    // Make a network request
    // Make a HTTP request
    // Make an AJAX request
    // AJAX === "Asynchrounous Javascript and XML"
    let ajaxOptions = {
        method: 'GET',
        url: '/comments' // or 'http://localhost:5000/comments'
    }
    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX request complete!', response);
            render(response);
        });

    console.log(`
    Made a network request,
     but no one has time to wait ...
    `)



}

function render(comments) {
    // Do some jQuery to render comments (state) to the DOM
    $('#comments').empty();
   for (let comment of comments) {
       $('#comments').append(`
       <li>
        ${comment.message}
        <div>
            -by ${comment.author}
        </div>
       </li>`)
   }
} // end function render




function onClick(){
    $(this).css('background', 'green');
}