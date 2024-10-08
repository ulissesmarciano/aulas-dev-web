let ordens = [
    {cliente: 'Ulisses', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    {cliente: 'Aline', tipo: 'compra', quantidade: 76, ativo: 'AAPL34' },
    {cliente: 'Arthur', tipo: 'venda', quantidade: 21, ativo: 'GOGL34' },
]

//Aqui é utilizado o laço for para somar a quantidade de ordens

// let quantidadeDeOrdens = 0

// for (let i = 0; i < ordens.length; i++) {
//     quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeDeOrdens);


//UTILIZANDO O REDUCE

let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade , 0)

console.log(quantidadeDeOrdens);


