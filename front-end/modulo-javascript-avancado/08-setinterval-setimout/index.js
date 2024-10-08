// setTimeout(() => {
//     alert("Olá Mundo")
// }, 2000);

// setInterval(() => {
//     console.log("executando a cada 2 segundos");
    
// }, 2000);



//PARAR O SETTIMEOUT E O SETIINTRERVAL

const idDoIntervalo = setInterval(() => {
                        console.log("executando a cada 2 segundos");
    
                    }, 2000);


console.log(idDoIntervalo);
//clearInterval(idDoIntervalo) limpa o id do intervalo. clearTimeout referese ao setTimeout
