const crud = require("../../crud");
const literatoHandler = require("../literatos/literatos.handler");

async function salvarLivro(livro) {
    const autores = livro.autores;
    const editora = livro.editora;
    delete livro.autores;
    delete livro.editora;
    const dados = await crud.save("livro", undefined, livro);
    literatoHandler.salvarLiterato({ autores: autores, editora: editora });
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