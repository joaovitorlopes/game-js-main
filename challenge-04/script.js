// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Olá, seja bem vindo');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
console.log('---Qual nome? ---');
let nome = 'João'
console.log(`Olá, ${nome}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
console.log('--- Alerta nome ---');
let nome1 = 'João';
alert(`Olá, ${nome1}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
console.log('---Qual linguagem?---');
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`A linguagem que você mais gosta é ${linguagem}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
console.log('---Adição---');
let valor1 = 10;
let valor2 = 5;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
console.log('---Subtração---');
let valor3 = 9;
let valor4 = 4;
let resultado1 = valor3 - valor4;
console.log(`A subtração de ${valor3} e ${valor4} é igual a ${resultado1}`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
console.log('---Maior ou menor de idade?---');
let idade = prompt('Digite sua idade');
if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
console.log('---Positivo, Negativo ou Zero?---');
let numero = prompt('Digite um número:');
if (numero > 0) {
    console.log(`${numero} é positivo`);
} else if (numero == 0) {
    console.log(`${numero} é igual a zero`);
} else {
    console.log(`${numero} é negativo`);
}

// Use um loop while para imprimir os números de 1 a 10 no console.
console.log('---Números de 1 a 10---');
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
console.log('---Aprovado ou Reprovado?---');
let nota = 7;
if (nota >= 7) {
    console.log(`Aprovado, ${nota}`);
} else {
    console.log(`Reprovado, ${nota}`);
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log('---Número aleatório---');
let numAleatorio = Math.random();
console.log(numAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console
console.log('---Número entre 1 e 10---');
let numAleatorio1 = parseInt(Math.random() * 10) + 1;
console.log(numAleatorio1);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log('---Numero entre 1 e 1000---');
let numAleatorio2 = parseInt(Math.random() * 1000) + 1;
console.log(numAleatorio2);
