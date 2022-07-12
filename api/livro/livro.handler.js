const crud = require("../../crud");

async function salvarLivro(livro) {
    const dados = await crud.save("livro", undefined, livro);
    return dados;
}

async function buscarLivro() {
    const dados = await crud.get("livro");
    return dados;
}

async function removerLivro(id) {
    const dados = await crud.remove("livro", id);
    return dados;
}

async function buscarLivroId(id) {
    const dados = await crud.getById("livro", id);
    return dados;
}


module.exports = {
    salvarLivro,
    buscarLivro,
    removerLivro,
    buscarLivroId
}