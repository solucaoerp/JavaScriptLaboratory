console.log("Loop For 1 a 7");
for (let i = 1; i <= 7; i++) {
    console.log('Valor [', i, ']');
}

let cores = ['Preto', 'Branco', 'Azul', 'Vermelho', 'Amarelo'];
let novasCores = [
    { nome: 'Cinza', qtd: 10 },
    { nome: 'Laranja', qtd: 7 },
    { nome: 'Marrom', qtd: 17 }
]

console.log("Loop For em Array (forma deselegante)");
for (let i = 1; i < cores.length; i++) {
    console.log(cores[i]);
}

console.log("Loop For em Array (1º forma elegante)");
for (let i in cores) {
    console.log(cores[i]);
}

console.log("Loop For em Array (2º forma elegante)");
for (let value of cores) {
    console.log(value);
}

console.log("Loop For em Array de Objetos (3º forma elegante)");
for (let value of novasCores) {
    console.log(`Cor: ${value.nome} - qtd: ${value.qtd}`);
}

console.log("Loop For em Array de Objetos (4º forma elegante)");
for (let i in novasCores) {
    novasCores[i].nome = novasCores[i].nome.toUpperCase();
    console.log(`Cor: ${novasCores[i].nome} - qtd: ${novasCores[i].qtd}`);
}