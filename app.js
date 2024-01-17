alert('Bem vindo ao jogo do número secreto');
let secretNumber = 5;
let selectedNumber = prompt('Escolha um número entre 1 e 10');

if (selectedNumber == secretNumber) {
    console.log(`Parabéns, você acertou: ${secretNumber}`);
}
