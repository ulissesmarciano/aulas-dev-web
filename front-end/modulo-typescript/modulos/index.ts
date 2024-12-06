import { Customer } from "./Customer";

interface SpecialCustomer extends Customer {
    couponQuantity: number;
}

const specialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name: 'Maria',
    age: 32

}