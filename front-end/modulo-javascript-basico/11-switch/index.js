// switch (parametro) {
//     case valor1:
//         <bloco de declaracao>
//          break
//     case valor2:
//         <bloco de declaracao>
//          break
// }

// let nomeFilme = 'Batman vs Superman'

// switch(nomeFilme){
//     case 'Vingadores':
//         console.log('É o filme do Vingadores')
//         break //sempre é preciso ter um break após o final de cada case
//     case 'Batman vs Superman':
//         console.log('É o filme do Batman vs Superman');
//         break
//     //posso ter mais cases aqui
//     default://o break é equivalente ao else
//         console.log('É outro filme')
//         break
// }

let avaliacao = 5

switch (avaliacao) {
    case 1:
    case 2:
        console.log('Filme ruim');
        break;// se eu nao colocar um break aqui e a nota for 1 ou 2 o meu programa vai imprimir filme ruim e filme mediano pois nao tem o ponto de parada aonde eu desejo.
    case 3:
    case 4:
        console.log('Filme mediano');
        break;
    case 5:
        console.log('Filme excelente');
        break;
    default:
        console.log('Nota inválida');
        break;
}