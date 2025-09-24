let pokemon1 = null;
let pokemon2 = null;
let hp1;
let hp2;

function buscarPokemon() {
  let pkm_name = document.querySelector("#pkm_name").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name}`)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error("Pokemon não encontrado");
      }
      return resposta.json();
    })
    .then(dados => {
      const p = new Pokemon();
      p.nome = dados.name;
      p.tipo = dados.types.map(t => t.type.name);
      p.peso = dados.weight;
      p.sprite = dados.sprites.front_default;
      p.hp = dados.stats[0].base_stat;
      p.ataque = dados.stats[1].base_stat;
      p.defesa = dados.stats[2].base_stat;
      // console.log(p.exibirDados());    
      document.getElementById("resultado").innerHTML =
        `<h1>${p.nome}</h1> 
<ul>
   <li>Tipo: ${p.tipo}</li>
   <li>Peso: ${p.peso}</li>
   <li>HP: ${p.hp}</li>
   <li>Ataque: ${p.ataque}</li>
   <li>Defesa: ${p.defesa}</li>
</ul>
   <img src="${p.sprite}">
   `;
      document.getElementById("hp1").max = p.hp;
      document.getElementById("hp1").value = p.hp;

      pokemon1 = p;
      hp1 = p.hp;
    })
    .catch(erro => {
      alert(erro.message);
    });


}


function buscarPokemon2() {
  let pkm_name2 = document.querySelector("#pkm_name2").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name2}`)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error("Pokemon não encontrado");
      }
      return resposta.json();
    })
    .then(dados => {
      const p2 = new Pokemon();
      p2.nome = dados.name;
      p2.tipo = dados.types.map(t => t.type.name);
      p2.peso = dados.weight;
      p2.sprite = dados.sprites.front_default;
      p2.hp = dados.stats[0].base_stat;
      p2.ataque = dados.stats[1].base_stat;
      p2.defesa = dados.stats[2].base_stat;
      // console.log(p.exibirDados());    
      document.getElementById("resultado2").innerHTML =
        `<h1>${p2.nome}</h1> 
<ul>
   <li>Tipo: ${p2.tipo}</li>
   <li>Peso: ${p2.peso}</li>
   <li>HP: ${p2.hp}</li>
   <li>Ataque: ${p2.ataque}</li>
   <li>Defesa: ${p2.defesa}</li>
</ul>
   <img src="${p2.sprite}">
   `;
      document.getElementById("hp2").max = p2.hp;
      document.getElementById("hp2").value = p2.hp;

      pokemon2 = p2;
      hp2 = p2.hp;
    })
    .catch(erro => {
      alert(erro.message);
    });
}

function batalhar() {
  // validação pra ver se tem 2 pokemons
  if (!pokemon1 || !pokemon2) {
    alert("Selecione 2 pokemons!")
    return;
  }

  // definindo o hp inicial de cada pokemon
  let hp1 = pokemon1.hp;
  let hp2 = pokemon2.hp;

  // esquema de inicio de ataque
  let turno = 1;

  // acumulando mensagens dos turnos
  let log = "";

  // zerando as mensagens no inicio da batalha
  document.getElementById("resultadoBatalha").innerHTML = "";
  document.getElementById("resultadoLog").innerHTML = "";

  // estrutura de repetição com temporizador
  let intervalo = setInterval(() => {
    // verificar se ainda tem pontos de vida
    if (hp1 > 0 && hp2 > 0) {
      if (turno % 2 !== 0) {
        // player 1 ataca no turno ímpar
        let dano = Math.max(1, pokemon1.ataque - pokemon2.defesa);
        hp2 -= dano;
        document.getElementById("hp2").value = hp2;
        log += `<p>${pokemon1.nome} atacou ${pokemon2.nome} e causou ${dano} de dano</p>`;
      } else {
        // player 2 ataca no turno par
        let dano = Math.max(1, pokemon2.ataque - pokemon1.defesa);
        hp1 -= dano;
        document.getElementById("hp1").value = hp1;
        log += `<p>${pokemon2.nome} atacou ${pokemon1.nome} e causou ${dano} de dano</p>`;
      }
      document.getElementById("resultadoLog").innerHTML = log;
      turno++;
    } 
    else { 
      // finalizando a repetição
      clearInterval(intervalo);

      // exibindo vencedor
      if (hp1 <= 0 && hp2 <= 0) {
        document.querySelector("#resultado-batalha").innerHTML = "<h2>Empate!</h2>";
      } else if (hp1 <= 0) {
        document.querySelector("#resultado-batalha").innerHTML = `<h2>${pokemon2.nome} venceu!</h2>`;
      } else {
        document.querySelector("#resultado-batalha").innerHTML = `<h2>${pokemon1.nome} venceu!</h2>`;
      }
    }
  }, 1000);
}
