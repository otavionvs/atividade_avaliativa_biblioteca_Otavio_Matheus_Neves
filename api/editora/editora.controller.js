const express = require("express");
const router = express.Router();

const editoraHandler = require("./editora.handler")

router.post("/", async(req, res) => {
    const body = req.body;
    const dados = await editoraHandler.salvarEditora(body);
    res.json(dados);
})

router.get("/", async(req, res) => {
    const dados = await editoraHandler.buscarEditora();
    res.json(dados);
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await editoraHandler.removerEditora(id);
    res.json(dados);
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await editoraHandler.buscarEditoraId(id);
    res.json(dados);
})



module.exports = router;