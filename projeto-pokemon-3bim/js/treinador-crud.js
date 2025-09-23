function salvarTreinadores(lista) {
    localStorage.setItem("treinadores", JSON.stringify(lista));
}

function carregarTreinadores() {
    const dados = localStorage.getItem("treinadores");
    return dados ? JSON.parse(dados) : [];
}

function cadastrarTreinador(){
    let treinadores = carregarTreinadores();

    const nome = document.querySelector("#nome-treinador").value;
    const idade = document.querySelector("#idade-treinador").value;
    const cidade = document.querySelector("#cidade-treinador").value;

    const t = new Treinador(nome, idade, cidade);

    treinadores.push(t);
    salvarTreinadores(treinadores);

    limparCampos();
}

let indice_atualizar = null;

function buscarDados(index){
    let treinadores = carregarTreinadores();

    document.querySelector("#nome-treinador").value = treinadores[index].nome;
    document.querySelector("#idade-treinador").value = treinadores[index].idade;
    document.querySelector("#cidade-treinador").value = treinadores[index].cidade;
}

function atualizarTreinador(){
    if (indice_atualizar === null) {
        return;
    }
    let treinadores = carregarTreinadores();

    const nome = document.querySelector("#nome-treinador").value;
    const idade = document.querySelector("#idade-treinador").value;
    const cidade = document.querySelector("#cidade-treinador").value;

    treinadores[indice_atualizar] = new Treinador(nome, idade, cidade);    
    salvarTreinadores(treinadores);
    
    limparCampos();
    indiceEdicao = null;
}

function excluirTreinador(index){
    let treinadores = carregarTreinadores();
    treinadores.splice(index, 1);
    salvarTreinadores(treinadores);
    listarTreinador();
}

function limparCampos(){
    document.querySelector("#nome-treinador").value = "";
    document.querySelector("#idade-treinador").value = "";
    document.querySelector("#cidade-treinador").value = "";
}