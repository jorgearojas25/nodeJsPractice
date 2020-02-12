const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require('cors');
const bodyParser = require("body-parser");
const socket = require('./socket')
const router = require("./network/routes");
const db = require("./db");

db("mongodb+srv://dbuser:D3s4rr0ll0@cluster0-w7ttm.mongodb.net/test");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
app.use(cors());
socket.connect(server);

router(app);

server.listen(3000, () => {
  console.log("la app esta funcionando en http://localhost:3000");
});

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//nodemon server
