const express = require("express");
const bodyParser = require("body-parser");
const router = require('./network/routes')
const db = require('./db');

db("mongodb+srv://dbuser:D3s4rr0ll0@cluster0-w7ttm.mongodb.net/test")

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);

app.listen(3000);
console.log("la app esta funcionando en http://localhost:3000");

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//nodemon server
