do{
    let numeroSurpresa = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    let tentativas = 3;
    let chute;

    do {

    do {
        chute = prompt('Adivinhe o número calculado pela máquina (Entre 0 a 10): ');
    } while (chute < 0 || chute > 10);

    if (chute < numeroSurpresa) {
        alert(`Que pena! O número é maior!
    Você tem ${--tentativas} tentativas.`);
    } else if (chute > numeroSurpresa) {
        alert(`Que pena! O número é menor!
    Você tem ${--tentativas} tentativas.`)
    } else {
        alert("Isso a é! Você acertou!");
        break;
    }

if (tentativas ===0){
    alert(`Que pena! Você tem ${tentativas} tentativas... O número correto era ${numeroSurpresa}.`);
    break;
}

} while (tentativas > 0)

} while (confirm("Deseja tentar novamente?"));