const crud = require("../../crud");

async function salvarLiterato(literato) {
    const dados = await crud.save("livro", undefined, literato);
    return dados;
}

async function buscarLivro() {
    const dados = await crud.get("livro");
    return dados;
}

async function buscarLivroId(id) {
    const dados = await crud.getById("livro", id);
    return dados;
}


module.exports = {
    salvarLiterato,
    buscarLivro,
    buscarLivroId
}