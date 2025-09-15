class Pokemon{
  set nome(valor){
    this._nome = valor;
  }
  get nome(){
    return this._nome;
  }
  set tipo(valor){
     this._tipo = valor;
  }
  get tipo(){
    return this._tipo;
  }
  set peso(valor){
    this._peso = valor;
  }
  get peso(){
    return this._peso;
  }
  set sprite(valor){
    this._sprite = valor;
  }
  get sprite(){
    return this._sprite;
  }
  set ataque(valor){
    this._ataque = valor;
  }
  get ataque(){
    return this._ataque;
  }
  set defesa(valor){
    this._defesa = valor;
  }
  get defesa(){
    return this._defesa;
  }
  set hp(valor){
    this._hp = valor;
  }
get hp(){
    return this._hp;
  }




  exibirDados(){
return `${this._nome} - ${this._tipo} - ${this._peso} - ${this._sprite}`;
  }
}