var nome = prompt('Qual o seu nome?');
document.write(`olá, <strong>${nome}</strong>! seu nome tem ${nome.length} letras.<br/>`);
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}`);
/*
    formatação de numeros:
    toFixed(n) -> para formatação de casas decimais
    toFixed().replace('', '') -> pode por exemplo trocar ponto por vírgula
    toLocaleString('pt-BR', {style: 'currecy', currency: 'BRL'}) -> formatação para moedas
*/