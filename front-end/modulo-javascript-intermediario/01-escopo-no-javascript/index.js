
//Aqui o escopo limita a ação para dentro dele mesmo. Quando tento utilizar fora meu console dá erro, mas se utilizo o escopo dentro ele funciona.
// if (true){
//     const mensagem = 'Olá'
//     console.log(mensagem);//esta mensagem esta impressa no console.
// }

// console.log(mensagem);//esta mensagem não. Um ERRO DE REFERÊNCIA.


//acontece o mesmo com o bloco de código autônomo

// {
    //     const mensagem = 'Olá'
    //     console.log(mensagem);//esta mensagem esta impressa no console.
// }

// console.log(mensagem);//esta mensagem não. Um ERRO DE REFERÊNCIA.
//ATENÇÃO: COM O VAR FUNCIONA.


//========================================================================================================================

//ESCOPO DE FUNÇÃO
// Uma função no JS define um escopo para variaveis criadas com let const e var.

// function falar () {
//     var mensagem = "Olá Mundo!"
//     console.log(mensagem)//Neste Caso a variável funciona somente dentro do escopo de função e somente invocada que emite seu resultado. Se trocar para const e let vai funcionar da mesma forma.
// }

// falar()// Aqui invoco a função
// console.log(mensagem);//Aqui a variável da erro de referência.

// function falar(){
//     const mensagem = 'Olá Mundo'
//     console.log(mensagem);
//     function falarOutracoisa() {
        
//     }

//     falarOutracoisa()
//     console.log(falarOutracoisa);
    
    
// }

// falar()
// console.log(falarOutracoisa);//Aqui também dá erro pois eu estou tentando imprimir novamente fora do escopo da função.



//===========================================================================================


//ESCOPO GLOBAL

//Neste caso toda variavel fora de qualquer escopo dentro do js funciona em qualquer escopo. Criei uma variável com uma url em outro escopo dentro do html.



//console.log(url)//Aqui imprimiu no console.
//dentro do arquivo js fora de qualquer escopo se eu declaro uma variável ela se torna global para este arquivo.


// let numero = 123

// if(true){
//     console.log(123)
// }