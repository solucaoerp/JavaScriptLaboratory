console.log("# 1. Faça um loop que mostre todas as frutas do vetor frutas");
let frutas = ['Maça', 'Uva', 'Banana', 'Pera', 'Melancia'];
console.log('Vetor de Frutas:', frutas);

console.log("// Loop com For");
for (let i in frutas) {
    console.log(`Fruta (loop for): ${frutas[i]}`);
}

console.log("// Loop com While");
let contador = 0;
while (contador < frutas.length) {
    console.log(`Fruta (loop while): ${frutas[contador]}`);
    contador++;
}

console.log("# 2. Conte de 1 até 14 com o loop while");
let contagem = 1;
while (contagem <= 14) {
    console.log(`Contagem:`, contagem);
    contagem++;
}