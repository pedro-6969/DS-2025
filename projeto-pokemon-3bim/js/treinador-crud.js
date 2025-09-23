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
    if (index >= 0 && index < treinadores.length) {
        indice_atualizar = index;
        
        document.querySelector("#nome-treinador").value = treinadores[index].nome;
        document.querySelector("#idade-treinador").value = treinadores[index].idade;
        document.querySelector("#cidade-treinador").value = treinadores[index].cidade;
    }
}

function atualizarTreinador(){
    if (indice_atualizar === null) {
        return;
    }
    let treinadores = carregarTreinadores();
    
    const nome = document.querySelector("#nome-treinador").value;
    const idade = document.querySelector("#idade-treinador").value;
    const cidade = document.querySelector("#cidade-treinador").value;
    
    treinadores[indice_atualizar] = {nome: nome, idade: idade, cidade: cidade};    
    salvarTreinadores(treinadores);

    limparCampos();
    listarTreinador();
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
    
    indice_atualizar = null;
}

// pokemon-treinador

let pokemon = null;
let hp;

function buscarPokemon(){
    let pokemon_name = document.querySelector("#pokemon-name").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then(resposta => {
        if(!resposta.ok){
            throw new Error("Pokémon não encontrado");
        }
        return resposta.json();
    })
    .then(dados => {
        const nome = dados.name;
        const tipo = dados.types.map(t => t.type.name);
        const hp = dados.stats[0].base_stat;
        const ataque = dados.stats[1].base_stat;
        const defesa = dados.stats[2].base_stat;
        const sprite = dados.sprites.front_default;
        const p = new Pokemon(nome, tipo, hp, ataque, defesa, sprite);
        document.querySelector("#resultado").innerHTML = `
        <h1>${p.nome}</h1>
        <img src="${p.sprite}">
        <ul>
            <li>Tipo: ${p.tipo}</li>
            <li>Hp: ${p.hp}</li>
            <li>Ataque: ${p.ataque}</li>
            <li>Defesa: ${p.defesa}</li>
        </ul>
        `;
        pokemon = p;
        hp = p.hp;
    })
    .catch(erro => {
        alert(erro.message);
    });

    
}

function adicionarPokemonAoTreinador(nome_treinador, pokemon){
    let treinadores = carregarTreinadores();
    let treinador = treinadores.find(t => t.nome === nome_treinador);

    if(treinador) {
        treinador.pokemons.push(pokemon);
        salvarTreinadores(treinadores);
    }
}

function confirmarAdicao(){
    const select = document.querySelector("#select-treinador").value;
    if (!nomeTreinador) {
        alert("Escolha um treinador!");
        return;
    }
    if (!pokemon) {
        alert("Busque um Pokémon antes de adicionar!");
        return;
    }
    adicionarPokemonAoTreinador(select, pokemon);
}

let select_treinador = document.querySelector("#select-treinador");

if(select_treinador){
    let treinadores = carregarTreinadores();
    treinadores.forEach(t => {
        let option = document.createElement("option");
        option.value = t.nome;
        option.textContent = t.nome;
        select_treinador.appendChild(option);
    });
}