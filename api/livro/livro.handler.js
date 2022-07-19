const crud = require("../../crud");
const literatoHandler = require("../literatos/literatos.handler");
const autorHandler = require("../autor/autor.handler");
const editoraHandler = require("../editora/editora.handler");

async function salvarLivro(livro) {
    try {
        // const autores = livro.autores;
        const editora = await editoraHandler.buscarEditoraId(livro.editora);
        // delete livro.autores;
        console.log(editora)
        return editora;

        // if (VerificarAutor(autores)) {
        //     const dados = await crud.save("livro", undefined, livro);
        //     literatoHandler.salvarLiterato(dados.id, autores);
        //     return dados;
        // } else {
        //     return "Autor/Autores inexistente!"
        // }

    } catch (exception) {
        console.log(exception)
        return "Não Encontrado!";
    }
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

function VerificarAutor(autores) {
    if (autores.constructor === Array) {
        for (autor in autores) {
            if (!autorHandler.buscarAutor(autor)) {
                console.log("2", autorHandler.buscarAutor(autores));
                return false;
            }
        }
    } else {
        if (!autorHandler.buscarAutor(autores)) {
            console.log("1", autorHandler.buscarAutor(autores));
            return false;
        }
    }
}


module.exports = {
    salvarLivro,
    buscarLivro,
    removerLivro,
    buscarLivroId
}