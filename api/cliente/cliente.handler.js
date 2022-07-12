const crud = require("../../crud");

async function salvarCliente(cliente) {
    const dados = await crud.save("cliente", undefined, cliente);
    return dados;
}

async function buscarCliente() {
    const dados = await crud.get("cliente");
    return dados;
}

async function removerCliente(id) {
    const dados = await crud.remove("cliente", id);
    return dados;
}

async function buscarClienteId(id) {
    const dados = await crud.getById("cliente", id);
    return dados;
}


module.exports = {
    salvarCliente,
    buscarCliente,
    removerCliente,
    buscarClienteId
}