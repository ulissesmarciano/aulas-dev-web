const boletoPago = false

if (boletoPago){
    console.log("No if boleto está pago");
} else if (boletoPago === false) {//aqui a verificação fica melhor assim, pois fica mais específica.
    console.log("No if boleto não está pago");    
}

boletoPago === true ? console.log("No ternário o boleto está pago") : console.log("No ternário o boleto não está pago");

