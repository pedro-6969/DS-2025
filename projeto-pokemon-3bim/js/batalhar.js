function batalhar(){
    if(!pokemon1 || !pokemon2){
        alert("Selecione 2 pokémons!");
        return;
    }

    let turno = 1;
    let log = "";

    document.querySelector("#resultado-batalha").innerHTML = "";
    document.querySelector("#resultado-log").innerHTML = "";

    let intervalo = setInterval(() => {
        if(hp1 > 0 && hp2 > 0){
            if(turno % 2 !== 0 ){
                let dano = Math.max(1, pokemon1.ataque - pokemon2.defesa);
                hp2 -= dano;
                document.querySelector("#hp2").value = hp2;
                document.querySelector("#resultado-log").innerHTML += `<p>${pokemon1.nome} atacou ${pokemon2.nome} e causou ${dano} de dano</p>`;
            }
            else{
                let dano = Math.max(1, pokemon2.ataque - pokemon1.defesa);
                hp1 -= dano;
                document.querySelector("#hp1").value = hp1;
                document.querySelector("#resultado-log").innerHTML += `<p>${pokemon2.nome} atacou ${pokemon1.nome} e causou ${dano} de dano</p>`;
            }
            turno++;
        }
        else{
            clearInterval(intervalo);
            if(hp1 <= 0 && hp2 <= 0){
                document.querySelector("#resultado-batalha").innerHTML = "<h2>Empate!</h2>";
            }
            else if(hp1 <= 0){
                document.querySelector("#resultado-batalha").innerHTML = `<h2>${pokemon2.nome} venceu!</h2>`;
            }
            else{
                document.querySelector("#resultado-batalha").innerHTML = `<h2>${pokemon1.nome} venceu!</h2>`;
            }
        }
    }, 1000);
}