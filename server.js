const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const response = require("./network/response");
const objResponse = require("./Interfaces/objResponse");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.post("/message", function(req, res) {
  
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

router.get("/message", function(req, res) {
  console.log(req.body);
  console.log(req.query);
  let myres = objResponse.objResp;
  response.success(req, res, myres);
});

// app.use('/', function(req, res){
//     res.send('Hola');
// });

app.listen(3000);
console.log("la app esta funcionando en http://localhost:3000");

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//nodemon server
