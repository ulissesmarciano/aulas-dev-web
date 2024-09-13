// console.log(this);
// O THIS E O WINDOW JÁ EXISTEM NO CONTEXTO GLOBAL
'use strict'//NÃO PERMITE QUE O QUE ESTIVER NO CONTEXTO GLOBAL VAZE PARA O LOCAL

// this.name = 'Ricardo'
// function saudar(){
//     console.log('this no contexto da funcao', this);
//     console.log('Olá, ' + this.name)
// }

//saudar()




//ESCOPO DE UM MÉTODO DENTRO DO OJETO

// let usuario = {
//     nome: 'Ulisses',
//     saudar: function(){
//         console.log('this no contexto do método', this)
        
//         console.log('this.nome no contexto do método', this.nome)
        
        
//     }
// }

// usuario.saudar()


//NO CONTEXTO DE UM OBJETO

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto de um objeto', this);
    this.temperatura = temperaturaDeCozimento;
}

comida.cozinhar(100)

console.log(comida)
