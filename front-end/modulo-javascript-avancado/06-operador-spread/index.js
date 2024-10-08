const pessoas = ['Ulisses', 'Joaquim', 'Arthur']
console.log(...pessoas);


//CONCATENAR DOIS ARRAYS

// let pessoas1 = ['Ulisses', 'Aline', 'Joaquim']
// let pessoas2 = ['Sergio', 'Edna', 'Glauco']

//console.log(pessoas3 = pessoas1.concat(pessoas2))

// pessoas1 = [...pessoas1, ...pessoas2]
// console.log(pessoas1);


const pessoa1 = {nome: 'Ulisses', idade: 36}

const objetoClonado = {...pessoa1}

console.log(objetoClonado);//AQUI FOI CRIADO UM OBJETO NOVO QUE FOI CLONADO DO PESSOA 1
console.log(pessoa1);//AQUI É O ORIGINAL

