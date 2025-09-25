class Pokemon{
  constructor(){ this.nome=''; this.tipo=''; this.peso=0; this.sprite=''; this.ataque=0; this.defesa=0; this.hp=0; }
  toJSON(){ return {nome:this.nome, tipo:this.tipo, peso:this.peso, sprite:this.sprite, ataque:this.ataque, defesa:this.defesa, hp:this.hp}; }
  static fromJSON(o){ const p=new Pokemon(); Object.assign(p,o); return p; }
}
