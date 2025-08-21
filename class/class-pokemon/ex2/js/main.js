function buscarPokemon(){
    let pkm_name1 = document.querySelector("#pkm_name1").value;
    let pkm_name2 = document.querySelector("#pkm_name2").value;
    document.querySelector("#resultado").innerHTML = '';
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name2}`)
    .then(resposta =>{
        if(!resposta.ok){
            throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
    })
    .then(dados => {
        const p2 = new Pokemon();
        p2.nome = dados.name;
        p2.tipo = dados.types.map( t=> t.type.name);
        p2.peso = dados.weight;
        p2.sprite = dados.sprites.front_default;
        //console.log(p.exibirDados());
    
        document.getElementById("resultado").innerHTML += `<div> 
        <h1>${p2.nome}</h1> 
        <ul>
        <li>Tipo:${p2.tipo}</li>
        <li>Peso:${p2.peso}</li>
        </ul>
        <img src="${p2.sprite}">
        </div>`;
    })
    
    .catch(erro=>{
        alert(erro.message)
    })
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name1}`)
    .then(resposta =>{
        if(!resposta.ok){
            throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
    })
    .then(dados => {
        const p1 = new Pokemon();
        p1.nome = dados.name;
        p1.tipo = dados.types.map( t=> t.type.name);
        p1.peso = dados.weight;
        p1.sprite = dados.sprites.front_default;
        //console.log(p.exibirDados());

        document.getElementById("resultado").innerHTML += `<div>
        <h1>${p1.nome}</h1> 
        <ul>
        <li>Tipo:${p1.tipo}</li>
        <li>Peso:${p1.peso}</li>
        </ul>
        <img src="${p1.sprite}">
        </div>`;
    })

}