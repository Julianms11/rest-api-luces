import app from "./app.js";
import { Server } from "socket.io";
import http from "http";
import { dataFromFile, changeFile } from "./fileManager.js";

const port = process.env.PORT || 3004;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

//routes
app.get("/api", (req, res) => {
  res.json(dataFromFile("ledState"));
});

// Web socket events
io.on("connection", (socket) => {
  console.log("connected");
  // Toggle
  socket.on("toggle", (estado) => {
    changeFile("ledState", estado);
    io.emit("toggle");
  });
  // Disconnect
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
// Start server
server.listen(port);
console.log("Server running on port", 3004);
