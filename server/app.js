require('dotenv').config();
const cors = require('cors');
const body_parser = require('body-parser');
const app = require('express')();

const { addUser, removeUser, getUser, getUsersInRoom } = require('./user');

app.use(cors());

const http = require('http').Server(app);
const io = require("socket.io")(http, {
    cors: true,
    origins: ["http://localhost:5000"],
});

app.use(body_parser.json());

io.on('connection', (socket) => {

    socket.broadcast.emit('a user connected');
    // socket.on('join', ({ name, room }, callback) => {
    //     const { error, user } = addUser({ id: socket.id, name, room });
    //     if (error) return callback(error);

    //     console.log(user);
    //     socket.join(user.room);

    //     socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    //     socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    //     io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    //     callback();
    // });

    socket.on('message', (message, callback) => {
        socket.broadcast.emit('message', message);
        // const user = getUser(socket.id);
        // io.to(user.room).emit('message', { user: user.name, text: message });
        // callback();
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        // const user = removeUser(socket.id);

        // if (user) {
        //     io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        //     io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        // }
    })
});

app.get('/', (req, res) => {
    res.send('hello world');
});

http.listen(process.env.PORT, () => {
    console.log(`listening on : ${process.env.PORT}`);
});