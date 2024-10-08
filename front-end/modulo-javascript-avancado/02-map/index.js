let pessoas = [
    {nome: 'Ulisses', idade: 37},
    {nome: 'Aline', idade: 37},
    {nome: 'Arthur', idade: 5}
]



//CONSTRUÇÃO FEITA COM UM LAÇO FOR NORMAL

// let nomeDasPessoas = []

// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)        
// }

// console.log(nomeDasPessoas);



//UTILIZANDO O MAP


// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return pessoa.nome
// })

// console.log(nomeDasPessoas)

//FORMA MAIS LIMPA
let nomeDasPessoas = pessoas.map((pessoas) => pessoas.nome)

console.log(nomeDasPessoas);
