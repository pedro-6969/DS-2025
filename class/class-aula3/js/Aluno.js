class Aluno extends Pessoa{
    set turma(valor){
        this._turma = valor;
    }
    get turma(){
        return this._turma;
    }
    set curso(valor){
        this._curso = valor;
    }
    get curso(){
        return this._curso;
    }
    set nota1(valor){
        this._nota1 = valor;
    }
    get nota1(){
        return this._nota1;
    }
    set nota2(valor){
        this._nota2 = valor;
    }
    get nota2(){
        return this._nota2;
    }
    exibirNotas(){
        return `Nota 1: ${this._nota1} e Nota 2: ${this._nota2}`
    }
    calcularMedia(){
        return (this._nota1+this._nota2)/2;
    }
}