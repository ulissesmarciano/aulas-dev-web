// let valorBoleto = 100

// console.log(valorBoleto);
// console.log(varbolet);//no console aparece a linha do erro

let inputTelefone = document.getElementById("telefone")

console.log(inputTelefone);

inputTelefone.disabled = true

function habilitarTelefone () {
    //inputTelefone.disabled = !true //funciona

    let inputTelefone = document.getElementById("telefone")
    inputTelefone.disabled = false
}