/*
    == ---- igual ---- a==b ---- verdadeiro se a for igual a b
    === ---- identico ---- a===b ---- verdadeiro se a for idêntico a b
    != ---- diferente ---- a!=b ---- verdadeiro se a for diferente de b
    !== ---- não são idênticos a!==b ---- verdadeiro se a não for idâentico a b
    < ---- menor que ---- a < b ---- verdadeiro quando a for menor que b
    <= ---- menor ou igual a ---- a <= b ---- verdadeiro quando a for menor ou igual a b
    > ---- maior que --- a > b ---- verdadeiro quando a foi maior que b
    >= ---- maior ou igual a ---- a >= b ---- verdadeiro quando a for maior ou igual a b
    && ---- e ---- a >= b && a === b ---- verdadeiro quando os dois valores forem verdadeiros.
    || ---- ou ---- a >= b || a === b ---- verdadeiro quando um dos valores forem verdadeiros.
    NOT ---- negar ---- a != b ---- verdadeiro se a NÃO é igual a b.
*/

// const a = 4;
// const b = 7;

// console.log(a >= b);

//=========================================================================

// const a = 2;
// const b = 2;

// console.log(a === b && a<=b );
//se um dos valores for falso o console vai imprimir falso


// const a = 2;
// const b =2; 

// console.log(a===b || a <= b)
//se um dos valores ou os dois for verdadeiro o console vai imprimir true

const a = 2;
const b =2;

console.log(!(a === b));
