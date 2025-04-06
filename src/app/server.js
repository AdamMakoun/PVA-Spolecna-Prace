var { server } = require("socket.io");
var io = new server(3000, {
    cors:{
        origin: ["http://localhost:3000"]
    }
});

var db = require("db");

io.on("connection", socket => {
    console.log(socket.id);

    socket.on("message-sent", (message, room) => {
        console.log(message);
        console.log(room);

        if(room){
            io.to(room).emit("message-receive", message);
        }
    });
    socket.on("join-room", (room, previousRoom, userName) => {
        if(room && userName){
            if(!db.one("SELECT * FROM room WHERE name = ${roomName}", {roomName: room})){
                db.none("INSERT INTO room(name) VALUES(${roomName})", {roomName: room}); 
            }
            if((!db.one("SELECT * FROM user_room JOIN user ON user.user_id = user_room.user_id JOIN room ON room.room_id = user_room.room_id WHERE user.name = ${usr} AND room.name = ${roomName}",
                 {
                    usr: userName,
                    roomName: room
                 }))){
                     var userIdQuery = db.one("SELECT user_id FROM user WHERE name = ${usr}", {usr: userName})
                     var roomIdQuery = db.one("SELECT room_id FROM room WHERE name = ${roomName}", {roomName: room})
                     db.none("INSERT INTO user_room(user_id, room_id) VALUES(${usrId}, ${rmId})", {usrId: userIdQuery.id, rmId: roomIdQuery.id}); 
            }
        }
        if(previousRoom)
            socket.leave(previousRoom);
        socket.join(room);
    });
})

