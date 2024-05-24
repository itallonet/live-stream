import express from "express";
import http from "http";
import { Server } from "socket.io";
import cros from "cors";

const application = express();
const server = http.createServer(application);
const io = new Server(server, { cors: { origin: "*" } });

application.use(cros())
let viewers = 0;

io.on("connection", (socket) => {
    viewers++;
    io.emit("viewer count", viewers);

    socket.on("chat message", (message) => {
        io.emit("chat message", message);
    });

    socket.on("disconnect", () => {
        viewers--;
        io.emit('viewer count', viewers);
    });
});

server.listen(5000, () => { console.log('Listening on *:5000') })