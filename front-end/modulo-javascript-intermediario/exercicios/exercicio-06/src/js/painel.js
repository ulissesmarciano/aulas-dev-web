const botoes = document.querySelectorAll('.botao')
const sanfonas = document.querySelectorAll('.sanfona')
const setas = document.querySelectorAll('.seta')




botoes.forEach((botao) => {
    
    botao.addEventListener('click', function(){
        const sanfona = this.nextElementSibling
        const sanfonaAtivada = sanfona.classList.contains('ativada')
        const seta = this.querySelector('img')
        const setaAtivada = seta.classList.contains('ativada')
        
        ativaElemento(sanfonas, sanfonaAtivada, sanfona)
        ativaElemento(setas, setaAtivada, seta)
        
    })
    
})


function ativaElemento (item, itemAtivado ,elementoDoItem){
    item.forEach((elemento) => {
        elemento.classList.remove('ativada')
    })

    if (itemAtivado === false) {
        elementoDoItem.classList.add('ativada')
    } else {
        elementoDoItem.classList.remove('ativada')
    }
}


