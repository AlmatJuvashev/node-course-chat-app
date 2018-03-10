let socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.on('welcomeMessage', function (msg) {
        console.log("New message ",msg);
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(msg) {
    console.log('New message', msg);
});
