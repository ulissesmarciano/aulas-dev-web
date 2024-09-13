function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post')

    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor = 'blue'
}

function aumentarFonteDoSegundoPost(){
    let textPost = document.getElementsByClassName('texto-post')
    let segundoPost = textPost[1]
    
    
    segundoPost.classList.add('fonte-grande')

    console.log(segundoPost);
    
    
}

function marcarRadio (genero) {
    //console.log(genero);

    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')
    
    if(genero === 'M'){
        radioMasculino.checked = true;
    }   else if (genero === 'F'){
        radioFeminino.checked = true;
    }
}