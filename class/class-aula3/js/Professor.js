class Professor extends Pessoa{
    set area(valor){
        this._area = valor;
    }
    get area(){
        return this._area;
    }
    set titulacao(valor){
        this._titulacao = valor;
    }
    get titulacao(){
        return this._titulacao;
    }
    exibirTitulacao(){
        if(this._titulacao=="E"){
            return `Especialista em ${this._area}`;
        }
        else if(this._titulacao=="M"){
            return `Mestre em ${this._area}`;
        }
        else if(this._titulacao=="D"){
            return `Doutor(a) em ${this._area}`;
        }
        else{
            return `Outro tipo de titulação em ${this._area}`;
        }
    }
}