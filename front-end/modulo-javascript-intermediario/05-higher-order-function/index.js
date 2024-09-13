// const calcularAnoDeNascimento = function (idade, mesDenascimento, imprimir){
//     const mesAtual = 9
//     let anoDeNascimento = 2024 - idade
//     if(mesDenascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log(`Seu ano de nascimento é: ${anoDeNascimento}`);
// }

// calcularAnoDeNascimento(36, 4, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(3)

console.log(dobrar(15), triplicar(7), quadruplicar(9))