var txtv = window.document.getElementById('txtvel')

function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h<strong></p>`
    if (vel > 60){
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidde!`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}