const express = require("express");
const router = express.Router();

const autorHandler = require("./autor.handler")


router.post("/", async(req, res) => {
    const body = req.body;
    const dados = await autorHandler.salvarAutor(body);
    res.json(dados);
})

router.get("/", async(req, res) => {
    const dados = await autorHandler.buscarAutor();
    res.json(dados);
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await autorHandler.removerAutor(id);
    res.json(dados);
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await autorHandler.buscarAutorId(id);
    res.json(dados);
})




module.exports = router;