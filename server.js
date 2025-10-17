const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname + "/public")); // optional if using /public folder

io.on("connection", (socket) => {
  console.log("A player connected:", socket.id);

  socket.on("playerMove", (data) => {
    socket.broadcast.emit("playerMove", data);
  });

  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 10000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
