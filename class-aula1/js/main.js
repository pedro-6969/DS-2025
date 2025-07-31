// const c = new Cliente("Pedro", "pedro@gmail.com", "2008-11-24");
// // criando uma instância/objeto da classe Cliente

// console.log(c);

// const c2 = new Cliente("Miguel", "miguel@gmail.com", "2008-11-25");

// console.log(c2.exibir());
// console.log(c2.calcular(10, 20));

// function cadastrar(){
//     let nome = document.querySelector("#nome").value;
//     let email = document.querySelector("#email").value;
//     let dataNascimento = document.querySelector("#dataNascimento").value;
    
//     const c3 = new Cliente(nome, email, dataNascimento);
//     document.querySelector("#mensagem").innerHTML = c3.exibir();
// }
// aluno
function calcularMedia(){
    let nome = document.querySelector("#nome").value;
    let curso = document.querySelector("#curso").value;
    let nota1 = Number(document.querySelector("#nota1").value);
    let nota2 = Number(document.querySelector("#nota2").value);
    let nota3 = Number(document.querySelector("#nota3").value);

    const a = new Aluno(nome, curso, nota1, nota2, nota3);
    console.log(a.exibir());
    console.log(a.calcularMedia(nota1, nota2, nota3));
}