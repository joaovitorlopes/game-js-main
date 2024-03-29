var setDivVisibility = (value) => document.getElementById('containerPage').style.visibility = value;

var reloadButton = document.getElementById('reloadButton');
reloadButton.addEventListener("click", () => {
    window.location.reload();
});

async function start() {
    alert('Bem vindo ao jogo do número secreto');
    let max = 1000;
    let secretNumber = parseInt(Math.random() * max + 1);
    let selectedNumber;

    let counter = 1;
    // enquanto não acertar
    while (selectedNumber != secretNumber) {
        selectedNumber = prompt(`Escolha um número entre 1 e ${max}`);
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
    setDivVisibility('visible');
    alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${counter} ${wordCounter}.`)
}

start();