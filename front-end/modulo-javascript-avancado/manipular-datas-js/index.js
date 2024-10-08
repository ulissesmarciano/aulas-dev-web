//como pegar a data atual

// const dataAtual = new Date();
// const dia = dataAtual.getDate();
// const mes = dataAtual.getMonth();
// const ano = dataAtual.getFullYear();

// console.log(dia);
// console.log(mes);
// console.log(ano);




//como adicionar ou retirar datas

// dataAtual.setDate(dataAtual.getDate() + 5)
// console.log(dataAtual);




//operações entre datas "YYYY-MM-DD"

// const dataNascimento = new Date('1988-04-21')
// const dataAtual = new Date()

// const diferencaEmMilissegundos = dataAtual - dataNascimento

// const idade = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000))

// console.log(idade);




// formatando data com toLocaleDateString DD/MM/AAAA

// const dataAtual = new Date()
// const dataFormatada = dataAtual.toLocaleDateString('pt-BR')

// console.log(dataFormatada);


// const dataAtual = new Date()
// const formato = Intl.DateTimeFormat('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
// const dataFormatadaIntl = formato.format(dataAtual)

// console.log(dataFormatadaIntl);



//EXEMPLOS

//const dataAtual = new Date()
// const umDiaDepois = new Date(dataAtual);

// umDiaDepois.setDate(dataAtual.getDate() + 1)

// console.log(umDiaDepois);









//const dataAtual = new Date()
// const umMesAtras = new Date(dataAtual)
// umMesAtras.setMonth(umMesAtras.getMonth() - 1)
// console.log(umMesAtras);





// const dataAtual = new Date()
// const opcoes = {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // }
    
    // const dataFormatada = dataAtual.toLocaleDateString('pt-Br', opcoes)
    // console.log(dataFormatada);
    


const dataAtual = new Date()

const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
}

const formatador =  new Intl.DateTimeFormat('pt-BR', opcoes)
const dataFormatada = formatador.format(dataAtual)

console.log(dataAtual);
