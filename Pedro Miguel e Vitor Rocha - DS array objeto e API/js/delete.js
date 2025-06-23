function excluirFilmes(){
    let cod_excluir = document.querySelector("#cod-excluir").value;

    let filme_local = JSON.parse(localStorage.getItem('filmes'));    // recupera o array de objetos

    let indice = filme_local.findIndex(filme => filme.cod == cod_excluir);

    if(indice != -1){
        filme_local.splice(indice, 1);
        localStorage.setItem('filmes', JSON.stringify(filme_local)); // trasnforma em JSON denovo
        alert("Item removido com sucesso!");
        limparCampos();
    }
    else{
        alert("Item não encontrado.")
    }
}

function limparCampos(){
    document.querySelector("#cod-excluir").value = "";
}