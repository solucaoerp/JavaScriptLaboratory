/* Comentários */
// comentário de uma linha
/*
    bloco de comentários
    envolve
    várias Linhas
 */

/*
    Alertas e Logs
    --------------------------
    alert("Olá Mundo!");
    console.log("Olá Mundo!");
*/

/* Definindo variáveis */
let nome = "Charles Borges";
let idade = 40;
let logado = true;
let lista = ["Arroz", "Feijão", "Macarrão", 50];
let nomeCompleto = { nome, idade, logado };
let precoBolo = 19.99;
let nomeCarro = "Ferrari";

/* Outras formas de definição de variáveis */
/*
    let: permite definir qualquer valor dentro, funciona apenas no contexto onde foi criada
    var: permite definir qualquer valor dentro (semântico), funciona em qualquer contexto
    const: variável constante, não permite sobrescrever uma variável, eu valor não muda, o valor permanece até o fim
*/


/* Definição de variável com erro */
// let "cidade" = São Paulo; // forma errada 
let cidade = "São Paulo";    // forma correta

/* Exibindo o conteúdo das variáveis */
console.log("Exibindo o conteúdo de uma Variável");
console.log("Nome: ", nome, ", idade: ", idade, ", Logado: ", logado);
console.log(lista);
console.log(nomeCompleto);
console.log("Nome do carro: ", nomeCarro);
console.log("Preço do bolo: ", precoBolo);

/* Exibindo o tipo de uma variável */
console.log("Exibindo o Tipo de uma Variável");
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof logado);
console.log(typeof lista);
console.log(typeof nomeCompleto);

/*
    Quando usar ou não 'ponto-e-virgula'?
    
    Casos opcionais
    ------------------------------------
    Boa prática: sim, usar ao final de cada linha de código, isso demarca o fim da linha, do trecho de código
    
    Casos obrigatórios
    ------------------------------------
    blocos de código

*/

/* Operações com variáveis */
let a = 10;
let b = 10;
let c = 10;
let d = 10;

a = a + 1; // ou: a += 1;
b = b - 1; // ou: b -= 1;
c *= 2;    // ou: c = c * 2;
d /= 2;    // ou: d = d / 2;

console.log("Valor Soma da variável A = ", a, "| Valor Subtração da variável B = ", b, "| Valor Multiplicação da variável C = ", c, "| Valor Divisão da variável D = ", d);

/* Strings */
let firstName = "Charles";
let lastName = "Borges";
let age1 = 43;
let age2 = 17;
let age3 = 26;
let age4 = 31;
//let fullName = firstName + " " + lastName;

/* Template Strings (String turbinada) */
let fullName = `Name: ${firstName} ${lastName} | Idade: ${age1} anos`;
console.log(fullName);

/* Estruturas condicionais */
/*
    Símbolos:
    Menor: <
    Maior: >
    Igual e independente do tipo: == (não restritiva / flexível)
    Igual e dependente do tipo: === (restritiva)
    Diferente: !=
    Maior ou Igual: >=
    Menor ou Igual: <=    
*/

/* condicional simples */

if (age1 > 17) {
    console.log(`Idade: ${age1}. Você está com MAIOR idade!`);
} else {
    console.log(`Idade: ${age1}. Você está com MENOR idade!`);
}

/* aninhada */

if (age2 >= 17) {
    if (age2 < 40) {
        console.log(`Idade: ${age2}. Você está em fase adulta!`);
    }
}

/* multicondicionais (múltiplas condições) */

if (age3 >= 18 && age3 < 60) {
    console.log(`Idade: ${age3}. Você está em fase adulta!`);
}

if (age4 >= 18 || age4 < 60) {
    console.log(`Idade: ${age4}.`);
}

/* condicionais aninhados */

let age5 = 28;

if (age5 < 18) {
    console.log("Você é um jovem.");
} else if (age5 >= 18 && age5 < 60) {
    console.log("Você é um adulto.");
} else if (age5 >= 60) {
    console.log("Você é um idoso.");
}

/* desmistificando o IF */

// verifica o que é Verdadeiro ou Falso

let Ok = false;
let verificacao = age1 > 18;

if (Ok) {
    console.log(`Tipo: ${typeof Ok} -> entrou no IF`);
} else {
    console.log(`Tipo: ${typeof Ok} -> entrou no Else`);
}

/* Exercitando */

// Substitua o @ pela condicional correta para que o resultado seja TRUE
let x = 10;
let y = 5;
console.log(x > y);

// Substitua o @ pela condicional correta para que o resultado seja FALSE
let w = "10";
let z = 10;
console.log(w === z);

// Substitua o @ pela condicional correta para que o resultado seja TRUE
let e = 10;
let f = 5;
console.log(e != f);

// Crie uma condicional para verificar se o preço da carne está barato ou caro. PS: Até 45 está barato.
let precoUnitario = 40.3;

if (precoUnitario <= 45.3) {
    console.log("A carne está barata.");
} else {
    console.log("A carne está cara.");
}

/* Condicional Ternário */
let isMember = true;
let age6 = 17;
let isAdult = age6 >= 18 ? "Adulto." : "Menor.";

/* 
    isMember: condicional
    ? 2   caso de certo
    : 10; caso de errado    
*/
let shipping = isMember ? 2 : 10;

console.log(isMember ? `Você é membro. Frete: ${shipping}` : `Você não é membro. Frete: ${shipping}`);
console.log(isAdult);

/* Condicional Witch */
let profession = "POLICIAL";

switch (profession) {
    case "FISCAL":
        console.log(`Profissão: ${profession}. Sua camisa será VERDE.`);
        break;
    case "BOMBEIRO":
        console.log(`Profissão: ${profession}. Sua camisa será VERMELHA.`);
        break;
    case "POLICIAL":
        console.log(`Profissão: ${profession}. Sua camisa será AZUL.`);
        break;
    default:
        console.log(`Profissão: ${profession}. Não classificada.`);
        break;
}