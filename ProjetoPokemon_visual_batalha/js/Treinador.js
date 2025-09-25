class Treinador{
  constructor(nome, idade, cidade){ this.nome=nome; this.idade=idade; this.cidade=cidade; this.pokemons=[]; }
  addPokemon(p){ this.pokemons.push(p); }
  toJSON(){ return {nome:this.nome, idade:this.idade, cidade:this.cidade, pokemons:this.pokemons.map(p=>p.toJSON())}; }
  static fromJSON(o){ const t=new Treinador(o.nome,o.idade,o.cidade); t.pokemons=o.pokemons.map(p=>Pokemon.fromJSON(p)); return t; }
}
