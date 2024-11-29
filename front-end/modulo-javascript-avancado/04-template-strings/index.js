//IMPRIMINDO TEXTOS SEM INTERPOLAÇÃO

// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => "Primeiro Nome: " + primeiroNome + " Ultimo Nome: " + ultimoNome + " Idade: " +idade

// console.log(imprimirInformacoesPessoa("Ulisses", "Gonçalves", 36));

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => `Primeiro Nome: ${primeiroNome} Ultimo Nome: ${ultimoNome} Idade: ${idade}`

console.log(imprimirInformacoesPessoa("Ulisses", "Gonçalves", 36));
console.log(`${imprimirInformacoesPessoa("Ulisses", "Gonçalves", 36)}, Ele é um DevQuester`);
