let adicionar = prompt("Deseja adicionar item a sua lista de Compras? 'Sim' ou 'Não' ");
let frutas = [];
let doces = [];
let mercearia = [];
let gelados = [];

while (adicionar == 'Sim') {

    let produto = prompt('Informe o Produto a ser adicionado ou digite "Finalizar" para ver sua Lista:  ');

    if (produto == "Finalizar") {
        alert(`Sua Lista de Compras: 
        \nFrutas: ${frutas} 
        \nDoces: ${doces}
        \nMercearia: ${mercearia}
        \nGelados: ${gelados}`);
        break;
    }

    let grupo = prompt(`Selecione o grupo na qual ${produto} será adicionado: 1 - Frutas, 2 - Doces, 3 - Mercearia, 4 - Gelados: `)

    switch (grupo) {
        case "1":
            frutas.push(produto);
            alert(`${produto} foi adicionado a sua Lista de Compras em Frutas.`);
            break;
        case "2":
            doces.push(produto)
            alert(`${produto} foi adicionado a sua Lista de Compras em Doces.`);
            break;
        case "3":
            mercearia.push(produto);
            alert(`${produto} foi adicionado a sua Lista de Compras em Mercearia.`);
            break;
        case "4":
            gelados.push(produto);
            alert(`${produto} foi adicionado a sua Lista de Compras aos Gelados.`);
            break;
        default:
            alert('Opção invalida!')
            break;
    }

}