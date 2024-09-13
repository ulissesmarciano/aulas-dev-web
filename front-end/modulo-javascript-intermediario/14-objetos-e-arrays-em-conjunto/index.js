
// let jogo2 = {
//     nome: 'Fallout'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [//Posso declarar o objeto dentro do array
//     {
//         nome: 'Final Fantasy'
//     }, 

//     jogo2 //Posso declarar fora do escopo de objeto e colocar dentro do array somente a declaração.

//     ]
// }

// let jogo3 = {
//     nome: 'FIFA'
// }

// videoGame.jogos.push(jogo3)//Posso adicionar um novo jogo para o array de jogos.

// console.log(videoGame);










//OBJETO DENTRO DE UM OUTRO OBJETO


let cliente = {
    nome: 'Ulisses',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Metal Gear'}
        ]
    }
}

console.log(cliente)
console.log(cliente.ultimoPedido.jogos[0].nome)
