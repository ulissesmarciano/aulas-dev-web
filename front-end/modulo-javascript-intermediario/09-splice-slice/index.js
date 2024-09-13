let frutas = ['banana', 'maçã', 'laranja', 'uva']


// let frutasExtraidas = frutas.slice(1,3)

// console.log(frutasExtraidas);
// console.log(frutas) //Neste caso as frutas não são removidas do array original. é como se criasse uma nova variável com os elementos.


// let frutasExtraidas = frutas.splice( 1,2)
// console.log(frutasExtraidas);
// console.log(frutas)


let removeEAdicionaFrutas = frutas.splice(1, 2, 'goiaba' , 'abacaxi', 'pera')
console.log(frutas) //aqui foram removidas e adicionadas outras frutas.
console.log(removeEAdicionaFrutas);//aqui mostra quais foram removidas.

