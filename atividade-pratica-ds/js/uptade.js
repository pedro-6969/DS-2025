let filme_local = JSON.parse(localStorage.getItem('filmes'));

function buscarFilmes(){
    let cod_editar = document.querySelector("#cod-editar").value;

    let indice = filme_local.findIndex(filme => filme.cod == cod_editar);

    if(indice != -1){
        document.querySelector("#input-cod").value = filme_local[indice].cod;
        document.querySelector("#input-nome").value = filme_local[indice].nome;
        document.querySelector("#input-diretor").value = filme_local[indice].diretor;
        document.querySelector("#input-ano").value = filme_local[indice].ano;
    }
    else{
        alert("Índice não encontrado!")
        limparCampos();
    }
}

function editarFilmes(){
    let input_cod = document.querySelector("#input-cod").value;
    let input_nome = document.querySelector("#input-nome").value;
    let input_diretor = document.querySelector("#input-diretor").value;
    let input_ano = document.querySelector("#input-ano").value;

    if(input_cod && input_nome && input_diretor && input_ano){
        filme_local.push({cod: input_cod, nome: input_nome, diretor: input_diretor, ano: input_ano});
        localStorage.setItem('filmes', JSON.stringify(filme_local));
        excluirFilmes();
        limparCampos();
    }
    else{
        alert("Preencha todos os campos.");
    }
}

function excluirFilmes(){
    let cod_excluir = document.querySelector("#cod-editar").value;

    let indice = filme_local.findIndex(filme => filme.cod == cod_excluir);

    if(indice != -1){
        filme_local.splice(indice, 1);
        localStorage.setItem('filmes', JSON.stringify(filme_local)); // trasnforma em JSON denovo
    }
    else{
        alert("Item não encontrado.")
    }
}

function limparCampos(){
    document.querySelector("#input-cod").value = "";
    document.querySelector("#input-nome").value = "";
    document.querySelector("#input-diretor").value = "";
    document.querySelector("#input-ano").value = "";
    document.querySelector("#cod-editar").value = "";
}