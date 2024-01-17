alert('Boas vindas ao nosso site!');

let nome = 'Lua';
console.log(nome);
let idade = 25;
console.log(idade);
let numeroDeVendas = 50;
console.log(numeroDeVendas);
let saldoDisponivel = 1000;
console.log(saldoDisponivel);

alert('Erro! Prencha todos os campos.');

let mensagemDeErro = 'Erro, Prencha todos os campos.';
alert(mensagemDeErro);

nome = prompt('Qual o seu nome?');

idade = prompt('Qual a sua idade?')

if (idade >= 18){
    alert(`Que legal ${nome}, já pode tirar habilitação!`);
}