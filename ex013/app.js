function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <= 3){
                img.setAttribute('src', 'bebemenino.png')
            }else if(idade >= 4 && idade <= 15){
                img.setAttribute('src', 'menino.png')
            } else if(idade < 35){
                img.setAttribute('src', 'jovemhomem.png')
            } else if(idade < 60){
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <= 3) {
                img.setAttribute('src', 'bebemenina.png')
            } else if(idade >= 4 && idade <= 15){
                img.setAttribute('src', 'menina.png')
            } else if(idade < 35){
                img.setAttribute('src', 'jovemmulher.png')
            } else if(idade < 60){
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br><br>`
        res.appendChild(img)

    }

   
}