//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let j = 10;
while(j >= 0) {
    console.log(j);
    j--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let num = prompt('Digite um número:');
while(num >= 0) {
    console.log(num);
    num--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let num2 = prompt('Digite um número:');
let counter = 0;
while(counter <= num2) {
    console.log(counter);
    counter++;
}