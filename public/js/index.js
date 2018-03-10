let socket = io();

socket.on('connect', function () {
    console.log('connected to server');
});

socket.emit('createMessage', {
    from: 'Almat Juvashev',
    text: 'Hey. This is Almat'
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(msg) {
    console.log('New message', msg);
});
