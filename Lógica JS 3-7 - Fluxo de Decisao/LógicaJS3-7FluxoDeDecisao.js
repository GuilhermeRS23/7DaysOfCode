const area = prompt("Qual área você gostaria de seguir, 'Front-End' ou 'Back-End'? Digite nome da área: ");

let linguagen = '';

if (area == 'Front-End') {
    linguagen = prompt(`O que deseja aprender no ${area}, 'React' ou 'Vue'? Digite sua opção: `);

    if (linguagen == 'React' || linguagen == 'Vue') {
        alert(`${linguagen}!? Boa escolha.`);
    } 
 else {
        alert(`Opção "${linguagen}" inválida.`);
    }
}  

if (area == 'Back-End') {
    linguagen = prompt(`O que deseja aprender no ${area}, 'C#' ou 'Java'? Digite sua opção: `);

    if (linguagen == 'C#' || linguagen == 'Java') {
        alert(`${linguagen}? Boa escolha.`);
    } else {
        alert(`Opção "${linguagen}" inválida.`);
    }
} 

const especializarOuFullstack = prompt(`\nVocê quer seguir se especializando na área de ${area} ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 para Especializar ou 2 para FulLstack. \nDigite sua opção: `);

if (especializarOuFullstack == 1) {
    alert(`É ótimo  querer aprender mais sobre ${linguagen} para se especializar no ${area}!`)
} else if (especializarOuFullstack == 2) {
    alert(`Nesse caso é ideal aprender novas linguagens, além da ${linguagen} para se tornar um desenvolvedor Fullstack!`)
} else {
    alert(`Opção "${especializarOuFullstack}" inválida.`);
}

let listaTecnologias = [];
let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")

while (msg == 'ok') {
    let tecnologia = prompt("\nQuais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer?");
    listaTecnologias.push(tecnologia);
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")
} 

alert(`Você deseja aprender, ${listaTecnologias}.`);