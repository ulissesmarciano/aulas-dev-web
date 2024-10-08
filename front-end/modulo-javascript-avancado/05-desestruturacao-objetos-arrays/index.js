let pessoa = {nome: 'Ulisses', sobrenome: 'Marciano', idade: 36}
// let nome = pessoa.nome
// let idade = pessoa.idade



let {nome, idade, sobrenome: sobrenomePessoa } = pessoa

console.log(nome);
console.log(idade);
console.log(sobrenomePessoa);


const numeros = [1, 2, 3]

const [ um, dois, tres, quatro ] = numeros //cria-se variáveis baseadas n índice do array.
console.log(um);
console.log(dois);
console.log(tres);
console.log(quatro);
