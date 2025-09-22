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

function limparCampos(){
    document.querySelector("#nome-treinador").value = "";
    document.querySelector("#idade-treinador").value = "";
    document.querySelector("#cidade-treinador").value = "";
}

window.cadastrarTreinador = cadastrarTreinador;