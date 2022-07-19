const crud = require("../../crud");

async function salvarLocacao(locacao) {
    const dados = await crud.save("locacao", undefined, locacao);
    return dados;
}

async function buscarLocacao() {
    const dados = await crud.get("locacao");
    return dados;
}

async function removerLocacao(id) {
    const dados = await crud.remove("locacao", id);
    return dados;
}

async function buscarLocacaoId(id) {
    const dados = await crud.getById("locacao", id);
    return dados;
}


module.exports = {
    salvarLocacao,
    buscarLocacao,
    removerLocacao,
    buscarLocacaoId
}