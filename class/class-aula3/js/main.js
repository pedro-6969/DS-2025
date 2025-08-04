// criando um objeto/instância
const p = new Pessoa();

p.nome = "Pedro";
p.cpf = "123.699.669-00";
p.celular = "(15) 99999-6969";

// alert(p.nome);
// alert(p.exibirNome());

const a = new Aluno();

a.nome = prompt("Insira o nome");
a.cpf = "123.612.669-00";
a.celular = "(15) 99999-9969";
a.turma = "Div 2";
a.curso = "DS";
a.nota1 = 10;
a.nota2 = 8;
document.writeln(a.exibirNome());
document.writeln("Celular "+a.celular);
document.writeln(a.exibirNotas());
document.writeln(a.calcularMedia());

// Crie uma nova instância da classe professor
// exiba o nome, cpf, celular e função exibirTitulação()

const t = new Professor;

t.nome = "Gallé";
t.cpf = "123.699.615-00";
t.celular = "(15) 99999-6009";
t.area = "Educação física";
t.titulacao = "D";
document.writeln(t.exibirNome());
document.writeln(t.cpf);
document.writeln(t.celular);
document.writeln(t.exibirTitulacao());
