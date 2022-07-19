const express = require("express");
const router = express.Router();

const locacaoHandler = require("./locacao.handler")

router.post("/", async(req, res) => {
    const body = req.body;
    const dados = await locacaoHandler.salvarLocacao(body);
    res.json(dados);
})

router.get("/", async(req, res) => {
    const dados = await locacaoHandler.buscarLocacao();
    res.json(dados);
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await locacaoHandler.removerLocacao(id);
    res.json(dados);
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await locacaoHandler.buscarLocacaoId(id);
    res.json(dados);
})

module.exports = router;