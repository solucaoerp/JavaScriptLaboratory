/* função simples */
function MinhaFuncao() {
    console.log("Executando MinhaFuncao");
}

/* função com passagem de parâmetros */
function Somar(n1, n2) {
    let resultado = n1 + n2;
    console.log(`Resultado da soma: `, resultado);
}

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}

/* função com retorno */
function NomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

/* função com retorno condicional (true/false) */
function maiorIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

function calcPorcentagem(vDivisor, vDividendo) {
    return (vDividendo / vDivisor) * 100;
}

function calcImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}

function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true;
    } else {
        return false;
    }
}

/* Arrow Function */
const somar = (x, y) => {
    return x + y;
};

const somar2 = (x, y) => x + y;              // quando o retorno for somente uma linha, faça assim
const sobrenome = (sob) => 'Charles ' + sob; // quando o parâmetro for único, faça assim (nem precisa do parêntese)

/* funções dentro de funções */

function raizQuadrada(x) {
    return x * x;
}

function addRaizQuadrada(a, b) {
    return raizQuadrada(a) + raizQuadrada(b);
}



/* executando as funções simples e com parâmetros */
MinhaFuncao();
Somar(2, 4);
nomeCompleto("Charles", "Borges");
nomeCompleto("Francisco", "Robson");

/* executando a função com retorno */
let nome = NomeCompleto("Manoel", "Melo");
console.log(nome);

/* executando a função com retorno condicional */
let checkIdade = maiorIdade(20);
console.log(checkIdade);

let varIdade = 14;
let showIdade = maiorIdade(varIdade);
console.log(showIdade);

let divisor = 40;
let dividendo = 10;
let pct = calcPorcentagem(divisor, dividendo);
console.log(`${pct}% de ${divisor} é ${dividendo}`);

let metragem = 123;
let quartos = 3;
let precoImovel = calcImovel(metragem, quartos);
console.log(`A casa custa R$ ${precoImovel}`);

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log(`Acesso concedido.`);
} else {
    console.log(`Acesso NEGADO.`);
}

/* executando a função somar com Arrow Function */
console.log(`soma com Arrow Function - Exemplo-001: `, somar(10, 5));
console.log(`soma com Arrow Function - Exemplo-002: `, somar2(10, 5));
console.log(`Sobrenome com Arrow Function - Exemplo-003: `, sobrenome('Borges'));
console.log(`soma de duas Raiz Quadrada 'a' e 'b': `, addRaizQuadrada(2, 3));