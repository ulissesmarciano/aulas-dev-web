let pessoas = [
    {nome: 'Ulisses', idade: 37},
    {nome: 'Aline', idade: 37},
    {nome: 'Arthur', idade: 5}
]



//CONSTRUÇÃO FEITA COM UM LAÇO FOR NORMAL

// let pessoasComIdadeDe37Anos = []

// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade === 37) {
//         pessoasComIdadeDe37Anos.push(pessoas[i])        
//     }
// }

// console.log(pessoasComIdadeDe37Anos);






//UTILIZANDO O FILTER

//UTILIZANDO FUNÇÃO ANÔNIMA

// let pessoasComIdadeDe37Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 37
// })


let pessoasComIdadeDe37Anos = pessoas.filter((pessoa) => pessoa.idade === 37) //FORMA MAIS LIMPA

console.log(pessoasComIdadeDe37Anos);
