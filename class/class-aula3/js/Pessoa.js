class Pessoa{
    // set = inserir valor em um atributo
    // get = pegar valor de um atributo
    // encapsulamento = criar um método para inserir e pegar valores em um atrbuto
    set nome(valor){
        this._nome = valor;
    }
    get nome(){
        return this._nome;
    }
    set cpf(valor){
        this._cpf = valor;
    }
    get cpf(){
        return this._cpf;
    }
    set celular(valor){
        this._celular = valor;
    }
    get celular(){
        return this._celular;
    }
    exibirNome(){
        return `Nome: ${this._nome}`;
    }
}