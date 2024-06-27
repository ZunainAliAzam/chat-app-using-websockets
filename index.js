const express = require("express");
const app = express();
const path = require("path");
const Port = process.env.Port || 4000;
// app.get("", async () => {});

const server = app.listen(Port, () => {
  console.log(`server running on port ${Port}`);
});
const io = require("socket.io")(server);

const socketsConnected = new Set();

const onConnected = (socket) => {
  console.log("User is connected on", socket.id);
  socketsConnected.add(socket.id);

  io.emit("clients-total", socketsConnected.size);

  socket.on("disconnect", () => {
    console.log("Socket Disconnected", socket.id);
    socketsConnected.delete(socket.id);
    io.emit("clients-total", socketsConnected.size);
  });
};

io.on("connection", onConnected);

app.use(express.static(path.join(__dirname, "public")));
