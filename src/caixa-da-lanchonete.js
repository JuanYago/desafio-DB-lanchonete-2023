
class CaixaDaLanchonete {
  produtos = [
    { tipo: "principal", codigo: "cafe", nome: "Café", preco: 3.0 },
    { tipo: "principal", codigo: "suco", nome: "Suco Natural", preco: 6.2 },
    { tipo: "principal", codigo: "sanduiche", nome: "Sanduíche", preco: 6.5 },
    { tipo: "principal", codigo: "salgado", nome: "Salgado", preco: 7.25 },

    {
      tipo: "combo",
      codigo: "combo1",
      nome: "1 Suco e 1 Sanduíche",
      preco: 9.5,
    },
    {
      tipo: "combo",
      codigo: "combo2",
      nome: "1 Café e 1 Sanduíche",
      preco: 7.5,
    },

    {
      tipo: "extra",
      codigo: "chantily",
      nome: "Chantily (extra do Café)",
      preco: 1.5,
      depende: "cafe",
    },
    {
      tipo: "extra",
      codigo: "queijo",
      nome: "Queijo (extra do Sanduíche)",
      preco: 2.0,
      depende: "sanduiche",
    },
  ];

  formasDePagamento = ["dinheiro", "debito", "credito"];


  calcularValorDaCompra(metodoDePagamento, itens) {
    const pagamentoValido = this.validarPagamento(metodoDePagamento);
    

        if (!pagamentoValido) {
      return "Forma de pagamento inválida!";
    }
    const {mensagem, valido} = this.validarItems(itens)
        if (!valido) {
            return mensagem
    }
    
  }

  

  pagamentoDebito(precoTotal) {
    return precoTotal * 0.5;
  }

  pagamentoCredito(precoTotal) {
    const acrescimo = precoTotal * 0.03;

    return acrescimo;
  }

  pagamentoDinheiro(precoTotal) {
    return precoTotal;
  }

  /**
   *
   * @param {Array<string>} itens
   */
  validarItems(itens) {

    // Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
    if (itens.length === 0) {
      return {
        valido: false,
        mensagem: "Não há itens no carrinho de compra!",
      };
    }

    for (const item of itens) {
      const [codigo, quantidade] = item.split(",");
      const produto = this.produtos.find((p) => p.codigo === codigo);
      

      //Se o código do item não existir, apresentar mensagem "Item inválido!"
      if (!produto) {
        return {
          valido: false,
          mensagem: "Item inválido!",
        };
      }

   


      //Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
      if (produto.tipo === "extra") {
        if (!itens.some((i) => i.split(",")[0] === produto.depende)) {
          return {
            valido: false,
            mensagem: "Item extra não pode ser pedido sem o principal!",
          };
        }
      }
    }
  
  }

  //Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"
  validarPagamento(metodoDePagamento) {
    return this.formasDePagamento.some((f) => f === metodoDePagamento);
  }
}

console.log(new CaixaDaLanchonete().calcularValorDaCompra("credito", ["cafe,1","chantily,1"]))

export { CaixaDaLanchonete };
