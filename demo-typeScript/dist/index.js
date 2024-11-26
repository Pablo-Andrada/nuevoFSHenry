"use strict";
const nombre = "Jorge";
const saludar = (name) => {
    return `Hola ${name}`;
};
console.log(saludar(nombre));
saludar("Pedro");
saludar("Maria");
const calcularTotal = (quantity, price) => {
    return quantity * price;
};
console.log(calcularTotal(5, 10));
