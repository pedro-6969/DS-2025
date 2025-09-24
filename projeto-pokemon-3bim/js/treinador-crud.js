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

let pokemon1 = null;
let hp1;

function buscarPokemon1(){
    let pokemon_name1 = document.querySelector("#pokemon-name1").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name1}`)
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
        const p1 = new Pokemon(nome, tipo, hp, ataque, defesa, sprite);
        document.querySelector("#resultado1").innerHTML = `
        <h1>${p1.nome}</h1>
        <img src="${p1.sprite}">
        <ul>
            <li>Tipo: ${p1.tipo}</li>
            <li>Hp: ${p1.hp}</li>
            <li>Ataque: ${p1.ataque}</li>
            <li>Defesa: ${p1.defesa}</li>
        </ul>
        `;
        pokemon1 = p1;
        hp = p1.hp;
    })
    .catch(erro => {
        alert(erro.message);
    });
}

let select_treinador1 = document.querySelector("#select-treinador1");

if(select_treinador1){
    let treinadores = carregarTreinadores();
    treinadores.forEach(t => {
        let option1 = document.createElement("option");
        option1.value = t.nome;
        option1.textContent = t.nome;
        select_treinador1.appendChild(option1);
    });
}

let pokemon2 = null;
let hp2;

function buscarPokemon2(){
    let pokemon_name2 = document.querySelector("#pokemon-name2").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name2}`)
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
        const p2 = new Pokemon(nome, tipo, hp, ataque, defesa, sprite);
        document.querySelector("#resultado2").innerHTML = `
        <h1>${p2.nome}</h1>
        <img src="${p2.sprite}">
        <ul>
            <li>Tipo: ${p2.tipo}</li>
            <li>Hp: ${p2.hp}</li>
            <li>Ataque: ${p2.ataque}</li>
            <li>Defesa: ${p2.defesa}</li>
        </ul>
        `;
        pokemon2 = p2;
        hp2 = p2.hp;
    })
    .catch(erro => {
        alert(erro.message);
    });
}

let select_treinador2 = document.querySelector("#select-treinador2");

if(select_treinador2){
    let treinadores = carregarTreinadores();
    treinadores.forEach(t => {
        let option2 = document.createElement("option");
        option2.value = t.nome;
        option2.textContent = t.nome;
        select_treinador2.appendChild(option2);
    });
}