let numero1 = '';
let numero2 = '';
let operacao = '';

do{

operacao = prompt("Qual operação deseja fazer? Soma ('+'), Subtração ('-') , Divisão('/') e Multiplicação('*') ou 'Sair'.");

while(operacao != "+" && operacao != "-" && operacao != "/" && operacao != "*" && operacao != 'Sair' ){

    alert(`Opção ${operacao} invalída!`)
    operacao = prompt("Qual operação deseja fazer? Soma ('+'), Subtração ('-') , Divisão('/') e Multiplicação('*') ou 'Sair'.");
}
 if(operacao == 'Sair'){break;}

numero1 = prompt('Digite um valor: ');
numero2 = prompt(`Calculadora: ${numero1} ${operacao} `);

    switch (operacao) {
        case '+':
            alert(`Resultado da Soma : ${numero1} + ${numero2} = ${soma(numero1,numero2)}`);
            break;
        case '-':
            alert(`Resultado da Subtração: ${numero1} - ${numero2} = ${subtracao(numero1,numero2)}`);
            break
        case '/':
            alert(`Resultado da Divisão : ${numero1} / ${numero2} = ${dividir(numero1,numero2)}`);
            break;
        case '*':
            alert(`Resultado da Multiplicação : ${numero1} * ${numero2} = ${multiplicar(numero1,numero2)}`);
            break;
    }

} while(operacao === "+" || operacao === "-" || operacao === "/" || operacao === "*")

function soma(numero1 , numero2) {
     return Number(numero1) + Number(numero2);
}

function subtracao(numero1 , numero2) {
    return Number(numero1) - Number(numero2);
}

function dividir(numero1 , numero2) {
    return Number(numero1) / Number(numero2);
}

function multiplicar(numero1 , numero2) {
    return Number(numero1) * Number(numero2);
}
alert("Até a próxima colega...")
