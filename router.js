const express = require("express");
const router = express.Router();

const cliente = require("./api/cliente/cliente.controller");

router.use("/cliente", cliente);

const autor = require("./api/autor/autor.controller");

router.use("/autor", autor);

const editora = require("./api/editora/editora.controller");

router.use("/autor", editora);

const livro = require("./api/livro/livro.controller");

router.use("/autor", livro);

module.exports = router;