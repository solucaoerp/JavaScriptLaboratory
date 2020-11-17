var agora = new Date()
var diaSem = agora.getDay()
/*
    1 = Domingo
    2 = Segunda
    3 = Terça
    4 = Quarta
    5 = Quinta
    6 = Sexta
    7 = Sábado
*/
console.log(`Dia da semanda: ${diaSem}`)

switch (diaSem) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break    
    case 6:
        console.log('Sexta')
        break    
    case 7:
        console.log('Sábado')
        break    
    default:
        console.log('[ERRO] Dia inválido!')
        break;
}