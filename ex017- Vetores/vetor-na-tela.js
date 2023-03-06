 let valores =[8,1,7,4,2,9]

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// simplificando o codigo:

/*

for(let pos in valores){
    console.log(valores[pos])
}

*/

valores.indexOf(7) /*Retorna a chave onde o valor se encontra, caso o valor nao exista no vetor o javascript retorna o valor -1 */
 console.log(valores.indexOf(7))