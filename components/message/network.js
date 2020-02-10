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
  const filterMessages = req.query.user || null;
  controller.GetMessage(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 201)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, '[Message Network Get] ' + e)
    })
});

router.patch('/:id', (req, res) =>{
  controller.UpdateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, '[Message patch]' + e)
    });
});

router.delete('/:id', (req, res) => {
  controller.DeleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Ususario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, `[Network Message Delete] ${e}`)
    })
})

module.exports = router;
