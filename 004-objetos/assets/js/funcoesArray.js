let fruteira = ['Maça', 'Uva', 'Banana', 'Pêra', 'Melancia'];

let cars = [
    { brand: 'Fiat', model: '2022' },
    { brand: 'Bmw', model: '2017' },
    { brand: 'Ferrari', model: '2020' }
]

console.log('Fruteira com:', fruteira);
console.log('Quantidade de Frutas na Fruteira:', fruteira.length);

console.log('Adicionando a fruta Kiwi');
fruteira.push('Kiwi');

console.log('Fruteira atualizada:', fruteira);

console.log("Uso do 'join' no Array");
console.log(fruteira.join(', '));

console.log("Substituindo a Pêra pelo Mamão");
fruteira[3] = 'Mamão';

console.log('Fruteira atualizada:', fruteira);

console.log("Substituindo o Kiwi por Maracujá");
fruteira[fruteira.length - 1] = "Maracujá";

console.log('Fruteira atualizada:', fruteira);

console.log("Ordenação de Array (Crescente)");
fruteira.sort();

console.log('Fruteira atualizada:', fruteira);

console.log("Ordenação de Array (Decrescente)");
fruteira.reverse();

console.log('Fruteira atualizada:', fruteira);

console.log("Ordenação de Array de Objeto carro (por ano)");
cars.sort((a, b) => {
    if (a.model > b.model) {
        return 1;
    } else if (a.model < b.model) {
        return -1;
    } else {
        return 0;
    }
});

console.log('Carros:', cars);

console.log("Iteração em Array (Filter/Every/Some)");
let bigFrutas = fruteira.filter((item) => item.length >= 6);

console.log('Fruteira atualizada:', bigFrutas);

let Ok1 = fruteira.every((value) => {
    return value.length > 4;
})

let Ok2 = fruteira.some((value) => {
    return value.length > 4;
})

if (Ok1) {
    console.log("Todos são maior que 4");
} else {
    console.log("Não são todos maior que 4");
}

if (Ok2) {
    console.log("Algum item é maior do que 4");
} else {
    console.log("Nenhum item é maior do que 4");
}

console.log("Verificar se tem um valor específico dentro do Array");
console.log("Tem Banana no Array?");
if (fruteira.includes("Mamão")) {
    console.log("Sim");
} else {
    console.log("Não");
}