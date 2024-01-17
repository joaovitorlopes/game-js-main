alert('Bem vindo ao jogo do número secreto');
let secretNumber = 5;
let selectedNumber;

let counter = 1;
// enquanto não acertar
while (selectedNumber != secretNumber) {
    selectedNumber = prompt('Escolha um número entre 1 e 10');
    // comparando o número secreto e o número escolhido
    if (selectedNumber == secretNumber) {
        alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${counter} tentativas.`);
    } else {
        if (selectedNumber > secretNumber) {
            alert(`O número secreto é menor que ${selectedNumber}`);
        } else {
            alert(`O número secreto é maior que ${selectedNumber}`);
        }
        counter++;
    }
}
