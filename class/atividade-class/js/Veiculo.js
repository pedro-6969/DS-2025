class Veiculo{
    set marca(valor){
        this._marca = valor;
    }
    get marca(){
        return this._marca;
    }
    set modelo(valor){
        this._modelo = valor;
    }
    get modelo(){
        return this._modelo;
    }
    set ano(valor){
        this._ano = valor;
    }
    get ano(){
        return this._ano;
    }
    informacoes(){
        return `Marca: ${this._marca} | Modelo': ${this._modelo} | Ano: ${this._ano}`;
    }
    ligar(){
        return 'O veículo foi ligado';
    }
}