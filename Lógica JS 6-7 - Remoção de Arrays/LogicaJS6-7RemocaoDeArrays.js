let frutas = [];
let doces = [];
let mercearia = [];
let gelados = [];

let adicionar = 'Sim';

while (adicionar != 'Não') {

    if (frutas.length === 0 && doces.length === 0 && mercearia.length === 0 && gelados.length === 0) {

        adicionar = prompt("Deseja adicionar item a sua lista de Compras? Digite 'Sim' ou 'Não'. ");

    } else {
        adicionar = prompt("Deseja adicionar item a sua lista de Compras? Digite 'Sim' , 'Não' ou 'Remover'. ");
    }


    while (adicionar != 'Sim' && adicionar != 'Não' && adicionar != 'Remover') {

        alert(`Operação "${adicionar}" não recohecida ou inválida!"`)

        adicionar = prompt("Deseja adicionar item a sua lista de Compras? 'Sim' ou 'Não' ");
    }

    if (adicionar == 'Não') { break; }


    if (adicionar == "Sim") {
        let produto = prompt('Informe o Produto a ser adicionado: ');

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
    } else if (adicionar == 'Remover') {
        if (frutas.length === 0 && doces.length === 0 && mercearia.length === 0 && gelados.length === 0) {
            alert(`Lista vazia!`)

        } else {
            remover = prompt(`Lista de Compras: 
            \nFrutas: ${frutas}. 
            \nDoces: ${doces}.
            \nMercearia: ${mercearia}.
            \nGelados: ${gelados}.
            \n\nQual produto você deseja remover?`);

            if (frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            }
            else if (doces.indexOf(remover) != -1) {
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            }
            else if (mercearia.indexOf(remover) != -1) {
                mercearia.splice(mercearia.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            }
            else if (gelados.indexOf(remover) != -1) {
                gelados.splice(gelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)

            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
    }
} alert(`Sua Lista de Compras: \nFrutas: ${frutas}.\nDoces: ${doces}.\nMercearia: ${mercearia}.\nGelados: ${gelados}.`)
