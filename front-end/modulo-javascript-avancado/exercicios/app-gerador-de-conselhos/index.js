//MINHA SOLUÇÃO

// const botao = document.getElementById('btn')
// const adviceId = document.getElementById('advice-id')
// const advice = document.getElementById('advice')


// botao.addEventListener('click', () => {
//     conselhos()
    
// })


// async function conselhos(){
//     try {
//         const resposta = await fetch("https://api.adviceslip.com/advice")
//         const conselhoAleatorio = await resposta.json()

//         const idDoConselho = conselhoAleatorio.slip.id
//         const conselho = conselhoAleatorio.slip.advice

//         adviceId.innerText = idDoConselho
//         advice.innerText = `"${conselho}"`

//     } catch (error) {
//         console.log(error)
//     }
    
// }

// conselhos()






//SOLUÇÃO DO ADMIN

const adviceUpdateButton = document.querySelector(".btn");
const adviceNumber = document.querySelector(".title");
const adviceDescription = document.querySelector(".text");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    /* 
      A propriedade .ok é responsável por verificar se a resposta (Response) foi feita com sucesso ou não, 
  
      nesse caso estamos negando a resposta, ou seja, se a resposta não foi feita com sucesso, retornamos um erro.
    
      Ela está presente no objeto Response, que é retornado pela função fetch. 
    */

    if (!response.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerText = adviceId;
    adviceDescription.innerText = adviceText;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
  
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();
