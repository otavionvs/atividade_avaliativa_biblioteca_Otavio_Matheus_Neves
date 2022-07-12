const crud = require("../../crud");

async function salvarAutor(autor) {
    const dados = await crud.save("autor", undefined, autor);
    return dados;
}

async function buscarAutor() {
    const dados = await crud.get("autor");
    return dados;
}

async function removerAutor(id) {
    const dados = await crud.remove("autor", id);
    return dados;
}

async function buscarAutorId(id) {
    const dados = await crud.getById("autor", id);
    return dados;
}


module.exports = {
    salvarAutor,
    buscarAutor,
    removerAutor,
    buscarAutorId
}