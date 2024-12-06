//TYPE ANOTATION

function greet(name: string) {
    console.log(`Olá, ${name}`);

}

greet('Ulisses')

function doubleNumber(number1: number): number {
    return number1 * 2;
}

const resultado = doubleNumber(4)
console.log(resultado);
