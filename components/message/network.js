const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");
router.post("/", function(req, res) {
  controller
    .AddMesagge(req.body.user, req.body.message)
    .then(respuesta => {
      response.success(req, res, respuesta, 201);
    })
    .catch(e => {
      response.error(
        req,
        res,
        "Informacion invalida",
        400,
        "Error en el contenido"
      );
    });
});

router.get("/", function(req, res) {
  console.log(req.body);
  console.log(req.query);
  response.success(req, res, "lista");
});

module.exports = router;
