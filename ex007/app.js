function clicar(){
    var txtn = window.document.getElementById('txt')
    var res = window.document.querySelector('div#res')
    var pais = txtn.value
    
    if(pais == "Brasil" || pais == "brasil"){
        res.innerHTML += '<p>Você é <strong>BRASILEIRO</strong>!</p>'
    } 
    else{
        res.innerHTML += '<p>Você é <strong>ESTRANGEIRO</strong>!</p>'
    }
    
   
}