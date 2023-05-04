let pessoa = {
    nome: 'Robson',
    idade: '48',
    carros: [
        { modelo: 'Fiat', cor: 'Preto' },
        { modelo: 'Ferrari', cor: 'Vermelho' }
    ]
}

let personagem = {
    nome: 'Charles',
    idade: 43,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

console.log('# Acessando valores de um objeto:');
console.log('personagem.nome:', personagem.nome);
console.log('personagem.idade:', personagem.idade);
console.log('personagem.pais:', personagem.pais);

console.log('# Acessando valores de um objeto dentro de outro objeto:');
console.log('personagem.caracteristicas.forca:', personagem.caracteristicas.forca);
console.log('personagem.caracteristicas.magia:', personagem.caracteristicas.magia);
console.log('personagem.caracteristicas.stamina:', personagem.caracteristicas.stamina);

console.log('# Acessando valores de um array dentro do objeto:');
console.log('personagem.personagem.olhos[0]:', personagem.olhos[0]);
console.log('personagem.personagem.olhos[1]:', personagem.olhos[1]);

console.log('# --------------');
console.log('# Acessando e Alterando propriedades de um objeto (arrays ou objetos):');
personagem.nome = 'Maria';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde');
console.log('# --------------');

console.log('# Acessando valores de um objeto, dentro de um array do objeto:');
console.log('pessoa.carros[0].modelo:', pessoa.carros[0].modelo);
console.log('pessoa.carros[0].cor', pessoa.carros[0].cor);
console.log('pessoa.carros[1].modelo e cor: ' + pessoa.carros[1].modelo + ', cor: ' + pessoa.carros[1].cor);

console.log('# Exibindo objetos:');
console.log(personagem);
console.log(pessoa);