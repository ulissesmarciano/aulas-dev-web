const button = document.getElementById('button') as HTMLButtonElement; //QUANDO EU NÃO COLOCO O aS A CONSTANE RECEBE DOIS TIPOS QUE SÃO HTMLELEMENT OU NULL, MAS SE EU DEFINO COMO ESTÁ AQUI ELE RESPEITA A TIPAGEM PEDIDA.

button.addEventListener('click', event =>{
    const mouseEvent = event as MouseEvent; // NESTE CASO ELE VAZIO PODDE RECEBER O MOUSEEVENT, MAS PODE SER COLOCADO EXPLICITAMENTE COMO ESTA AQUI.

})