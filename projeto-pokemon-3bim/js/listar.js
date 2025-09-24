function listarTreinador(){
    let treinadores = carregarTreinadores();
    let lista_treinador = document.querySelector("#lista-treinador");

    lista_treinador.innerHTML = "";
    treinadores.forEach((treinador, i) => {
    lista_treinador.innerHTML += `<li>${treinador.nome} - ${treinador.idade} - ${treinador.cidade}</li>
    <button onclick="buscarDados(${i})">Atualizar</button>
    <button onclick="excluirTreinador(${i})">Excluir</button></li>`;
    });
}


listarTreinador();