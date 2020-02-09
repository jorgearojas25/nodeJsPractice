const express = require("express");
const bodyParser = require("body-parser");
const router = require('./network/routes')


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);

app.listen(3000);
console.log("la app esta funcionando en http://localhost:3000");

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//nodemon server
