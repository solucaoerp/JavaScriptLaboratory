function CarregarImagem(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()

    msg.innerHTML = `Agora são ${horaAtual} horas`

    if (horaAtual >= 0 && horaAtual < 12){
        // Bom dia!
        img.src = 'pics/manha.png'
        window.document.body.style.background = '#dac391'
    } else if (horaAtual >= 12 && horaAtual < 18) {
        // Boa tarde!
        img.src = 'pics/tarde.png'
        window.document.body.style.background = '#fcde8e'
    } else {
        // Boa noite!
        img.src = 'pics/noite.png'
        window.document.body.style.background = '#896c60'
    }
}