for(let contador = 1 ; contador < 6; contador++) {

console.log(contador);
  
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}


const prompt = require('prompt-sync')();
const entrada = prompt();

var quantosNumerosSeraoSomados = entrada('Digite aqui quantos números deseja somar');
let soma = 0;

for(let i = 0; i < quantosNumerosSeraoSomados; i++) {

numero = entrada('Digite aqui o número a ser somado');

  soma += parseInt(numero);
}

 console.log()