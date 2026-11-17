const pedidos = [
  {
    cliente: "Leonardo",
    itens: [
      { nome: "Teclado", preco: 150, quantidade: 2 },
      { nome: "Mouse", preco: 80, quantidade: 1 },
    ],
    cupom: "DESCONTO10",
    frete: 20,
  },
  {
    cliente: "Maria",
    itens: [
      { nome: "Monitor", preco: 900, quantidade: 1 },
      { nome: "Cabo HDMI", preco: 40, quantidade: 3 },
    ],
    cupom: "INVALIDO",
    frete: 30,
  },
  {
    cliente: "João",
    itens: [{ nome: "Headset", preco: 200, quantidade: 2 }],
    cupom: "DESCONTO20",
    frete: 15,
  },
];

function processarPedidos(pedidos) {
  const resultados = [];
  let totalGeral = 0;
  let descontoAtual = 0;

  for (let i = 0; i < pedidos.length; i++) {
    const pedido = pedidos[i];
    let subtotal = 0;

    for (const item of pedido.itens) {
      subtotal += item.preco * item.quantidade;
    }

    // VALORES ESPERADOS ANTES DO DESCONTO:
    // Leonardo: 380
    // Maria: 1020
    // João: 400

    if (pedido.cupom === "DESCONTO10") {
      descontoAtual = 10;
    }

    if (pedido.cupom === "DESCONTO20") {
      descontoAtual = 20;
    }

    // DESCONTOS ESPERADOS:
    // Leonardo: 10% = R$ 38
    // Maria: 0% = R$ 0 (cupom inválido)
    // João: 20% = R$ 80

    subtotal -= subtotal * (descontoAtual / 100);

    // SUBTOTAIS ESPERADOS DEPOIS DO DESCONTO:
    // Leonardo: R$ 342
    // Maria: R$ 1020
    // João: R$ 320

    const total = subtotal + pedido.frete;

    // TOTAIS ESPERADOS COM FRETE:
    // Leonardo: R$ 362
    // Maria: R$ 1050
    // João: R$ 335

    totalGeral += subtotal;

    resultados.push({
      cliente: pedido.cliente,
      subtotal,
      frete: pedido.frete,
      total,
    });
  }

  // TOTAL GERAL ESPERADO: R$ 1747

  return { resultados, totalGeral };
}

console.log(processarPedidos(pedidos));
