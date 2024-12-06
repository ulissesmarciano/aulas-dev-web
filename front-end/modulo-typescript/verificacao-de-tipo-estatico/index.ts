//O TYPESCRIPT MOSTRA EM TEMPO REAL OS ERROS NO CÓDIGO


let nome = "Ulisses";
//nome = 123; //AQUI ELE ACUSA O ERRO POR TROCAR O QUE FOI DECLARADO COMO STRING POR UM NUMBER



function sum(number1 : number, number2: number){
    	return number1 + number2;
};

//sum(1); //AQUI ELE ACUSA O ERRO POR FALTAR UM SEGUNDO PARÂMETRO PARA A FUNÇÃO


const movies = ['Batman vs Superman', 'Senhor dos Anéis']

//movies.classList //AQUI ELE ACUSA O ERRO POIS A VARIÁVEL NÃO POSSUI O METODO CLASSLIST
