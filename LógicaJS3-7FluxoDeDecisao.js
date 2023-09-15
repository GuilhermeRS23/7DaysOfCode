const respota1 = prompt("Qual área você gostaria de seguir? 1- Front-End || 2 - Back-End.\nDigite sua opção: ");

if (respota1 == 1) {
    const respota2 = prompt("\nO que deseja aprender no Front-End? 1 - React || 2 - Vue. \nDigite sua opção: ");

    if (respota2 == 1) {
        alert("React!? Boa escolha.");
    } else if (respota2 == 2) {
        alert("Vue!? Boa escolha.");
    } else {
        alert(`Opção "${respota1}" inválida.`);
    }
}  

if (respota1 == 2) {
    const respota2 = prompt("\nO que deseja aprender no Back-End? 1 - C# || 2 - Java. \nDigite sua opção: ");

    if (respota2 == 1) {
        alert("C#!? Boa escolha.");
    } else if (respota2 == 2) {
        alert("Java!? Boa escolha.");
    } else {
        alert(`Opção "${respota2}" inválida.`);
    }
} 

const dev = prompt("\nVocê quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 para Especializar ou 2 para Fulstack. \nDigite sua opção: ");

if (dev == 1) {
    alert('Que bom que você quer continuar se especializando na área!')
} else if (dev == 2) {
    alert('Que bom que você quer virar um desenvolvedor Fullstack!')
} else {
    alert(`Opção "${dev}" inválida.`);
}

let listaTecnologias = [];

do {
    tecnologia = prompt("\nQuais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer? Quando quiser finalizar digite 0.");
    listaTecnologias.push(tecnologia);
} while (tecnologia != 0);

console.log(listaTecnologias);