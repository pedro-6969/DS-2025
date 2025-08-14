const c = new Carro();

c.marca = prompt("Digite a marca do carro:");
c.modelo = prompt("Digite o modelo do carro:");
c.ano = Number(prompt("Digite o ano do carro:"));
c.portas = Number(prompt("Digite a quantidade de portas do carro:"));

console.log(c.informacoes());
console.log(`Portas: ${c.portas}`);
console.log(c.ligar());
console.log(c.abrirPorta());
