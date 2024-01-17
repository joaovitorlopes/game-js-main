alert('Bem vindo ao jogo do número secreto');
let secretNumber = 5;
let selectedNumber = prompt('Escolha um número entre 1 e 10');

// comparando o número secreto e o número escolhido
if (selectedNumber == secretNumber) {
    alert(`Parabéns, você acertou: ${secretNumber}`);
} else {
    if (selectedNumber > secretNumber) {
        alert(`O número secreto é menor que ${selectedNumber}`);
    } else {
        alert(`O número secreto é maior que ${selectedNumber}`);
    }
}
