const express = require("express");
const https = require("https");
const fs = require("fs");
const socketIo = require("socket.io");
const xss = require("xss");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
  passphrase: "",
};

const app = express();
const server = https.createServer(options, app);
const io = socketIo(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    const cleanMessage = xss(msg);
    io.emit("chat message", cleanMessage);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`Secure chatroom running on port ${port}.`),
);
