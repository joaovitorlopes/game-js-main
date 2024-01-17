// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
dayOfWeek = prompt('Que dia é hoje?');
if (dayOfWeek == 'Sábado' || dayOfWeek == 'Domingo') {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
number = prompt('Digite um número:');
if (number >= 0) {
    alert(`${number} é positivo!`)
} else {
    alert(`${number} é negativo!`)
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
points = 90;
if (points >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
accountBalance = 1000;
alert(`O saldo da sua conta é ${accountBalance}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let userName = prompt('Qual o seu nome?');
alert(`Seja bem vindo ${userName}!`);