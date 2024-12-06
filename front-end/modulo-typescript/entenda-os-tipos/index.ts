function sendMessage(userName: string, canLogged: boolean) {
    console.log(`Olá ${userName}. Você${!canLogged ? " não" : ""} pode logar.`);
    
};

const userName: string = "Beto";
const isLogged: boolean = true;


sendMessage(userName, isLogged);


const obj: {x: string, y: number} = {x: 'olá', y: 12}