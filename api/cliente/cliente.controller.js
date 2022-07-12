const express = require("express");
const router = express.Router();

const clienteHandler = require("./cliente.handler")

// const dados = await clienteHandler.salvarCliente(body); - n funciona o await

router.post("/", async(req, res) => {
    const body = req.body;
    const dados = await clienteHandler.salvarCliente(body);
    res.json(dados);
})

router.get("/", async(req, res) => {
    const dados = await clienteHandler.buscarCliente();
    res.json(dados);
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await clienteHandler.removerCliente(id);
    res.json(dados);
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await clienteHandler.buscarClienteId(id);
    res.json(dados);
})



module.exports = router;