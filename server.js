const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const response = require("./network/response");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function(req, res) {
  console.log(req.headers);
  res.header({
    custom: "Mi header"
  });
  res.status(201).send({
    resultado: true,
    tipoNotificacion: 1,
    Entidades: [
      { id: 1, nombre: "jorge" },
      { id: 2, nombre: "dani" }
    ],
    mensajes: ["hola", "jejjje"]
  });
});

router.post("/message", function(req, res) {
  console.log(req.body);
  console.log(req.query);
  response.success(req, res);
});

// app.use('/', function(req, res){
//     res.send('Hola');
// });

app.listen(3000);
console.log("la app esta funcionando en http://localhost:3000");

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//nodemon server
