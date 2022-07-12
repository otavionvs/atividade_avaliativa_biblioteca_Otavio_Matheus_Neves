const express = require("express");
const router = express.Router();

const livroHandler = require("./livro.handler")

router.post("/", async(req, res) => {
    const body = req.body;
    const dados = await livroHandler.salvarLivro(body);
    res.json(dados);
})

router.get("/", async(req, res) => {
    const dados = await livroHandler.buscarLivro();
    res.json(dados);
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await livroHandler.removerLivro(id);
    res.json(dados);
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await livroHandler.buscarLivroId(id);
    res.json(dados);
})



module.exports = router;