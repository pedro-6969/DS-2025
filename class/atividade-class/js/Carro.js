class Carro extends Veiculo{
    set portas(valor){
        this._portas = valor;
    }
    get portas(){
        return this._portas;
    }
    abrirPorta(){
        return 'A porta foi aberta';
    }
}