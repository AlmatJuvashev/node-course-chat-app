const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit from Admint text Welcome to the chat app
    socket.emit('welcomeMessage', generateMessage('Admin', 'Welcome to the chat app!'));
    // socket.broadcast.emit from Admin text New user joined
    socket.broadcast.emit('welcomeMessage', generateMessage('Admin', 'New user in the chat'));

    socket.on('createMessage', (msg) => {
        console.log('Created message', msg);

        io.emit('newMessage', generateMessage(msg.from, msg.text));

        // socket.broadcast.emit('newMessage', {
        //     from: msg.from,
        //     text: msg.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log("User is disconnected");
    });
});



server.listen(port, () => {
    console.log(`Server is up on ${port}`);
})
