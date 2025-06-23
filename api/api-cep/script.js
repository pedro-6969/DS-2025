function getCep(){
    let input_cep = document.querySelector("#input-cep").value;
    let output = document.querySelector("#resultado");

    if(input_cep.length != 8){
        output.innerHTML = "<h1>CEP inválido</h1>";
        return;
    }
    let url = `https://brasilapi.com.br/api/cep/v2/${input_cep}`;
    fetch(url)
    .then(resp=>{
        if(!resp.ok) throw new Error ("CEP não identificado!");
        return resp.json();
    })
    .then(dados=>{
        output.innerHTML = `<h2>Endereço</h2>
        <ul>
            <li>Rua: ${dados.street}</li>
            <li>Bairro: ${dados.neighborhood}</li>
            <li>Cidade: ${dados.city}</li>
            <li>Estado: ${dados.state}</li>
        </ul>`;
    })
    .catch(erro=>{
        output.innerHTML = `<h3>${erro.message}</h3>`;
    })
}

function getCep2(){
    let input_cep = document.querySelector("#input-cep").value;
    let output = document.querySelector("#mensagem");

    let rua = document.querySelector("#rua");
    let bairro = document.querySelector("#bairro");
    let cidade = document.querySelector("#cidade");
    let estado = document.querySelector("#estado");

    if(input_cep.length != 8){
        output.innerHTML = "<h1>CEP inválido</h1>";
        return;
    }
    let url = `https://brasilapi.com.br/api/cep/v2/${input_cep}`;
    fetch(url)
    .then(resp=>{
        if(!resp.ok) throw new Error ("CEP não identificado!");
        return resp.json();
    })
    .then(dados=>{
        rua.value = dados.street;
        bairro.value = dados.neighborhood;
        cidade.value = dados.city;
        estado.value = dados.state;
    })
    .catch(erro=>{
        output.innerHTML = `<h3>${erro.message}</h3>`;
    })
}
let endereco_salvos = [];
function cadastrar(){
    let rua = document.querySelector("#rua").value;
    let bairro = document.querySelector("#bairro").value;
    let cidade = document.querySelector("#cidade").value;
    let estado = document.querySelector("#estado").value;
    let cep = document.querySelector("#input-cep").value;

    // resultado da execução
    let mensagem = document.querySelector("#mensagem");
    if(!cep||!rua||!bairro||!cidade||!estado){
        mensagem.innerHTML = "<h1>Preencha os dados!</h1>";
        return;
    }

    let endereco = {cep, rua, bairro, cidade, estado};
    endereco_salvos.push(endereco);
    mensagem.innerHTML = "<h1>Endereço salvo com sucesso!</h1>";
    console.log("Endereços Salvos", endereco_salvos);

}