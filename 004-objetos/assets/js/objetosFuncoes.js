let pessoaFisica = {
    nome: 'Charles',
    sobrenome: 'Borges',
    idade: 40,
    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log('Funções dentro de objeto');
console.log('Nome/Sobrenome sem função: ' + pessoaFisica.nome + ' ' + pessoaFisica.sobrenome);
console.log('Nome/Sobrenome com função:', pessoaFisica.nomeCompleto());

console.log('Exibindo Objeto');
console.log(pessoaFisica);