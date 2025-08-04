// class define a estrutura do nosso projeto
// dentro da class iremos definir as características/atributos
class Cliente{
    // método/função construtor
    constructor(nome,email,dataNascimento){ // requisito
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }

    exibir(){
        return `${this.nome} ${this.email} ${this.dataNascimento}`;
    }

    calcular(qtd, valor){
        return qtd*valor;
    }
}