function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    minutos = minutos > 9 ? minutos : '0' + minutos
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        msg.innerHTML += `<p>Bom dia!</p>`
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        msg.innerHTML += `<p>Boa tarde!</p>`
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.png'
        msg.innerHTML += `<p>Boa noite!</p>`
        document.body.style.background = '#515154'
    }
}