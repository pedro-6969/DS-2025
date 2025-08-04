class Produto{
    // construtor é um método de requisitos
    constructor(nome, marca, cor){
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        // this é uma forma de apontar para algum atributo dentro da própria classe
    }
    exibir(){
        return `${this.nome} - ${this.marca} - ${this.cor}`;
    }
}