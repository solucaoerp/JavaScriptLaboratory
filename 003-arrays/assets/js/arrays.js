let colors = [
    "blue",
    "red",
    "green"
];

console.log("Cores do Array: ", colors);
console.log("Index [0] do Array: ", colors[0]);
console.log("Index [1] do Array: ", colors[1]);
console.log("Index [2] do Array: ", colors[2]);

/* Array encadeado */
let lista = ["Texto", 20, ["A", "B", "C", "D", 0], ["Charles", "Borges"]];

let terceiroValor = lista[3];

/* Acessando os valores dos arrays encadeados */
console.log("Array completo:", lista);
console.log("Valor '20' dentro do Array:", lista[1]);
console.log("Valor 'D' dentro do Array:", lista[2][3])
console.log("Valor 'A' dentro do Array:", lista[2][0]);

console.log("Nome:", terceiroValor[0]);
console.log("Sobrenome:", lista[3][1]);

/* operações com arrays */
let ingredientes = [
    "Água",
    "Farinha",
    "Ovo",
    "Corante Natural",
    "Sal"
]
console.log("Visualizando os ingredientes iniciais:", ingredientes);

/* Adicionando item no Array de forma ERRADA */
ingredientes[5] = "Cebola";

/* Adicionando item no Array de forma CORRETA (garante inclusão sem espaços vazios, na ordem sequencial) */
ingredientes.push("Canela");

console.log("Visualizando os ingredientes com itens adicionais:", ingredientes);

/* removendo o último item do array */
ingredientes.pop();
console.log("Visualizando os ingredientes após EXCLUSÃO do ÚLTIMO item:", ingredientes);

/* removendo o primeiro item do array */
ingredientes.shift();
console.log("Visualizando os ingredientes após EXCLUSÃO do PRIMEIRO item:", ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);

console.log("Exercícios:");
console.log("1. Como recuperar o carro FERRARI do array de carros?");
let carros = ['BMW', 'FERRARI', 'MERCEDES']
console.log(carros);

let x = carros[1];
console.log("1. Resolução:", x);

console.log("2. Troque a FERRARI por AUDI");

/* Forma deselegante de substituir um valor por outro */
//carros[1] = "AUDI";

/* Forma elegante de substituir um valor por outro */
let index = carros.indexOf("FERRARI"); // encontre o índice do elemento que deseja remover
// verifica se o elemento foi encontrado
if (index !== -1) {
    // remove o elemento procurado e adiciona o elemento desejado
    carros.splice(index, 1, 'AUDI');
}

console.log("Lista com AUDI adicionado:", carros);

console.log("3. Adicione o VOLVO à lista");
carros.push("VOLVO");

console.log("Lista com VOLVO adicionado:", carros);

console.log("Total de carros no Array:", carros.length);