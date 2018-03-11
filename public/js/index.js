let socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    // socket.on('welcomeMessage', function (msg) {
    //     console.log("New message ",msg);
    // });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(msg) {
    console.log('New message', msg);
    let li = jQuery('<li></li>');
    li.text(`${msg.from}: ${msg.text}`);
    jQuery('#messages').append(li);
});

socket.emit('createMessage', {
    from: 'Kanat',
    text: 'Hey Officers'
}, function(data) {
    console.log('Got it', data);
})

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    })
})
