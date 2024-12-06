interface ICustomer {
    name: string;
    age: number;    
}

interface IAddres {
    street: string;
}

interface ICostumerProfile extends ICustomer, IAddres {
    homeNumber: number | string;
}

const newProfile: ICostumerProfile = {
    name: 'Ulisses',
    age: 36,
    street: "Rua João",
    homeNumber: 200,
}

type TCustomer = {
    name: string;
    age: number;    
}

type TAddres = {
    street: string;
}

type TCustomerProfile = TCustomer & TAddres;

const newProfile2: TCustomerProfile = {
    name: 'Ulisses',
    age: 36,
    street: "Rua João",
}
