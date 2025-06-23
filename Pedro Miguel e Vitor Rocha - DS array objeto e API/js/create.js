let filmes = JSON.parse(localStorage.getItem("filmes")) || [
    {cod: 1, nome: "Homem Aranha 1", diretor: "Sam Raimi", ano: 2002}
];



function cadastrarFilmes(){
    let input_cod = document.querySelector("#input-cod").value;
    let input_nome = document.querySelector("#input-nome").value;
    let input_diretor = document.querySelector("#input-diretor").value;
    let input_ano = document.querySelector("#input-ano").value;

    if(input_cod && input_nome && input_diretor && input_ano){
        filmes.push({cod: input_cod, nome: input_nome, diretor: input_diretor, ano: input_ano});
        localStorage.setItem('filmes', JSON.stringify(filmes));
        limparCampos()
    }
    else{
        alert("Preencha todos os campos.");
    }
}

function limparCampos(){
    document.querySelector("#input-cod").value = "";
    document.querySelector("#input-nome").value = "";
    document.querySelector("#input-diretor").value = "";
    document.querySelector("#input-ano").value = "";
}