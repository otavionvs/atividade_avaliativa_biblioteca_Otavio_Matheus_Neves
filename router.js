const express = require("express");
const router = express.Router();

const funcionario = require("./api/funcionario/funcionario.controller");

router.use("/funcionario", funcionario);

module.exports = router;