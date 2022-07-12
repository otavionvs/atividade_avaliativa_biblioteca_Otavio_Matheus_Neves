const crud = require("../../crud");

async function salvarEditora(editora) {
    const dados = await crud.save("editora", undefined, editora);
    return dados;
}

async function buscarEditora() {
    const dados = await crud.get("editora");
    return dados;
}

async function removerEditora(id) {
    const dados = await crud.remove("editora", id);
    return dados;
}

async function buscarEditoraId(id) {
    const dados = await crud.getById("editora", id);
    return dados;
}


module.exports = {
    salvarEditora,
    buscarEditora,
    removerEditora,
    buscarEditoraId
}