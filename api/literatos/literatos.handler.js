const crud = require("../../crud");

async function salvarLiterato(id, literato) {
    const dados = await crud.save("literatos", undefined, { idLivro: id, literato });
    return dados;
}

async function buscarLivro() {
    const dados = await crud.get("literatos");
    return dados;
}

async function buscarLivroId(id) {
    const dados = await crud.getById("literatos", id);
    return dados;
}


module.exports = {
    salvarLiterato,
    buscarLivro,
    buscarLivroId
}