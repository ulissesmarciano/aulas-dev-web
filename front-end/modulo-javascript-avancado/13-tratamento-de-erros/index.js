
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (typeof chaleiraEstaNoFogao != 'boolean') throw "Somente tipos booleanos são aceitos nas entradas"
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve();
      console.log("Começando o processo de ferver a água");
    } else {
      const mensagemDeErro = "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
      reject(mensagemDeErro);
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café");
    resolve();
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café");
    resolve();
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara");
    resolve();
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = false;

async function fazerCafe() {
  try {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
  }catch(err){
    console.log(err)
  }finally{
    
    console.log("Finalizado o ritual de tomar café");
  }
}

fazerCafe();


// FALANDO SOBRE O TRY CATCH - Como fogaoEstaLigado está como false, na função ferver água existe um if que reporta no reject (como parâmetro) uma mensagem de erro. Como está pasado como parâmetro o catch reporta este erro. Neste caso no console.

//FALANDO SSOBRE O FINALLY - Após a execução do try catch o finally executa o resultado do programa. Ele é utilizado para fechar uma execução de banco de dados para que não fique rodando o erro.