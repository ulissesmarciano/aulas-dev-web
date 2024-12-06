const fs = require('fs')

fs.readFile('meu-arquivo.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data)
})

const users = [
    {nome:'Ulisses', idade: 36,},
    {nome:'Aline', idade: 37,}
];

console.log(users);



// fs.writeFile('users.txt', JSON.stringify(users), {
//     encoding: 'utf-8',
//     flag: 'a',
// }, (err) => {
//     if(err) throw err;
//     console.log('escrito com sucesso');
    
// })


fs.readFile('users.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    try {
        const jsonData = JSON.parse(data); // Transforma o texto em JSON
        console.log(jsonData);
    } catch (error) {
        console.error('Erro ao converter para JSON:', error);
    }
});