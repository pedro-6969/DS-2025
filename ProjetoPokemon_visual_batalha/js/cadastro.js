let treinadorAtual = null;
let pokemonsTemp = [];
let pkmSelecionado = null;

document.getElementById("btnBuscarPkm").addEventListener("click", async ()=>{
  const nome = document.getElementById("pkm_search").value.toLowerCase().trim();
  if(!nome) return alert("Digite um nome.");
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    if(!res.ok) throw new Error("Pokémon não encontrado.");
    const data = await res.json();
    pkmSelecionado = new Pokemon();
    pkmSelecionado.nome = data.name;
    pkmSelecionado.tipo = data.types.map(t=>t.type.name).join(", ");
    pkmSelecionado.peso = data.weight;
    pkmSelecionado.sprite = data.sprites.front_default;
    pkmSelecionado.hp = data.stats[0].base_stat;
    pkmSelecionado.ataque = data.stats[1].base_stat;
    pkmSelecionado.defesa = data.stats[2].base_stat;
    document.getElementById("pkmPreview").innerHTML = `
      <div class="pokemon-card">
        <img src="${pkmSelecionado.sprite}">
        <div><b>${pkmSelecionado.nome.toUpperCase()}</b><br>Tipo: ${pkmSelecionado.tipo}<br>HP:${pkmSelecionado.hp} Atk:${pkmSelecionado.ataque} Def:${pkmSelecionado.defesa}</div>
      </div>`;
  }catch(e){ alert("Erro: "+e.message); }
});

document.getElementById("btnAdicionarPkm").addEventListener("click",()=>{
  if(!pkmSelecionado) return alert("Nenhum Pokémon buscado.");
  pokemonsTemp.push(pkmSelecionado);
  alert(pkmSelecionado.nome+" adicionado!");
  document.getElementById("pkmPreview").innerHTML = "";
  document.getElementById("pkm_search").value = "";
  pkmSelecionado=null;
});

document.getElementById("formTreinador").addEventListener("submit", e=>{
  e.preventDefault();
  const t = new Treinador(
    document.getElementById("nome").value,
    parseInt(document.getElementById("idade").value),
    document.getElementById("cidade").value
  );
  pokemonsTemp.forEach(p=>t.addPokemon(p));
  TreinadorStorage.save(t);
  alert("Treinador salvo!");
  window.location.href="lista.html";
});
