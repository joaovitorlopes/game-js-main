alert('Bem vindo ao jogo do número secreto');
let secretNumber = parseInt(Math.random() * 100 + 1);
let selectedNumber;

let counter = 1;
// enquanto não acertar
while (selectedNumber != secretNumber) {
    selectedNumber = prompt('Escolha um número entre 1 e 100');
    // comparando o número secreto e o número escolhido
    if (selectedNumber == secretNumber) {
        break;
    } else {
        if (selectedNumber > secretNumber) {
            alert(`O número secreto é menor que ${selectedNumber}`);
        } else {
            alert(`O número secreto é maior que ${selectedNumber}`);
        }
        counter++;
    }
}

// Operador ternário
let wordCounter = counter > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${counter} ${wordCounter}.`);
