function listarFilmes(){
    let output = document.querySelector("#lista");
    output.innerHTML = "";

    let filme_local = JSON.parse(localStorage.getItem('filmes'));

    filme_local.forEach(filme => {
        output.innerHTML += `<div class="lista"><div class="espaco-lista">Código: ${filme.cod} | Filme: ${filme.nome} | Diretor: ${filme.diretor} | Ano de lançamento: ${filme.ano} </div></div>`;
    })
}
listarFilmes();