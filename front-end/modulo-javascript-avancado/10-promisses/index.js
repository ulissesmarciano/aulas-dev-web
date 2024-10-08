/*
    Pendente
    Realizada === Resolve
    Recusada === Recject
    Estabelecida
*/

// new Promise((resolve, reject) => {

// })


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver água');
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver água');
            reject()
        }
    }) 
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café');
