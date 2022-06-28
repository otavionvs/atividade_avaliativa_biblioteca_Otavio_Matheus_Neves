const express = require("express");
const router = express.Router();

const funcionarioHandler = require("./funcionario.handler")

router.get("/", (req, res) => {
    res.send('Sistema!');
})

module.exports = router;