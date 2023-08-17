const readline = require("readline");



const cardapio = [
    { codigo: "cafe", nome: "Café", preco: 3.00 },
    { codigo: "chantily", nome: "Chantily (extra do Café)", preco: 1.50 },
    { codigo: "suco", nome: "Suco Natural", preco: 6.20 },
    { codigo: "sanduiche", nome: "Sanduíche", preco: 6.50 },
    { codigo: "queijo", nome: "Queijo (extra do Sanduíche)", preco: 2.00 },
    { codigo: "salgado", nome: "Salgado", preco: 7.25 },
   
];

function mostrarCardapio() {
    const mensagem = "=== Cardápio ===\n";
    for (const i = 0; i < cardapio.length; i++) {
        const item = cardapio[i];
        mensagem += `${item.codigo}: ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    }
    return mensagem;
}



// const pedidoEscolhido = escolherPedido();

// if (pedidoEscolhido !== null) {
//     const itemSelecionado = cardapio.find(function(item) {
//         return item.codigo === pedidoEscolhido.toLowerCase();
//     });

//     if (itemSelecionado) {
//         alert(`Você escolheu: ${itemSelecionado.nome}\nPreço: R$ ${itemSelecionado.preco.toFixed(2)}`);
//     } else {
//         alert("Pedido inválido.");
//     }
// }


function pagamentoDinheiro(precoTotal) {
    return precoTotal * 0.5;
}

function pagamentoCredito(precoTotal) {
    const acrescimo = precoTotal * 0.03;

    return acrescimo
}

