// function (a, b, ...args) {
//     //...
// }

function incentivarQuester (mensagem, ...nomesQuesters){
    nomesQuesters.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`))
    
}

incentivarQuester('Parabénspor ter chego ao módulo de JavaScript avançado, ', 'Ulisses', 'Guilherme', 'Glauco')