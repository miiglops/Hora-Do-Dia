function hora(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var saudacao = document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 6 && hora <=12){
        msg.innerHTML += 'da manhã'
        imagem.src = './assets/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
        saudacao.innerHTML = 'Bom Dia!'
    } else if (hora >= 13 && hora <= 18) {
        msg.innerHTML += 'da tarde'
        imagem.src = './assets/fototarde.jpg'
        document.body.style.background = '#b9846f'
        saudacao.innerHTML = 'Boa Tarde!'
    } else if (hora >= 19 && hora < 24) {
        msg.innerHTML += 'da noite'
        imagem.src = './assets/fotonoite.jpg'
        document.body.style.background = '#515154'
        saudacao.innerHTML = 'Boa Noite!'
    } else if (hora < 6){
        msg.innerHTML += 'da manhã'
        imagem.src = './assets/madrugada.jpg'
        document.body.style.background = 'black'
        saudacao.innerHTML = 'Boa Madrugada!'
    }
}