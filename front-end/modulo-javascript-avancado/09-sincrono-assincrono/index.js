function colocarAguaPraFerver(){
    console.log('colocar água pra ferver');

    setTimeout(() => {
        console.log('água ferveu!');
        passarCafe()
    }, 5000);
    
}

function prepararPraPassarOCafe(){
    console.log('pegar o pó de café');
    console.log('pegar o filtro de café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xícara');    
}

function passarCafe(){
    console.log('passando o café');    
}

colocarAguaPraFerver()
prepararPraPassarOCafe()
