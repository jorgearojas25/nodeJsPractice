const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post('/', (req, res) => {
    controller.AddUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, `[User Network] ${e}`)
        })
})

module.exports = router; 