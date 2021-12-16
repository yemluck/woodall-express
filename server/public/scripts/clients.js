/**
 * This code is running on client's computer
 */



$(document).ready( onReady );

function onReady() {
    console.log('So damn tired');

    $('#commentForm').on('submit', onAddComment);
    refresh();

    //$('button').on('click', onClick);

    // TODO by 5pm today
    // Write some code to get data from the 
    // GET /comments endpoint
    // and then render that data to the DOM

    

    function onAddComment(evt) {
        // Don't reload the page!
        evt.preventDefault();

        // Prepare our message object
        // to POST to the server
        let comments = {
            author: $('#authorInput').val(),
            message: $('#messageInput').val()
        }
        console.log('comment', comments)

        // Send data to server
        $.ajax({
            method: 'POST',
            url: '/comments',
            // Send the comment to the server
            // in the request "body"
            data: comments
        })
            .then((response) => {
                console.log('POST response', response);

                // Refresh...
                // Get /comments from the server again
                // and render to the DOM
                refresh();
            })
    }



}

function render(comments) {
    // Do some jQuery to render comments (state) to the DOM
    $('#comments').empty();
   for (let comment of comments) {
       $('#comments').append(`<ul>
       <li>
        ${comment.message}
        <div>
            -by ${comment.author}
        </div>
       </li></ul>`)
   }
} // end function render




function onClick(){
    $(this).css('background', 'green');
}


function refresh (){
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
    `);


}