type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
}

const newCostumer: Customer = {
    firstName: "Ulisses",
    age: 32
}

console.log(newCostumer);


function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é ${firstName}`);
    console.log(`O último nome é ${lastName}`);
    
}

printName("Ulisses")
printName("Ulisses", "Marciano")