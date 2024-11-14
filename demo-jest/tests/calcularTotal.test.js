// Calcular el total con una factura de un solo item
// Calcular el total con una factura con varios items
// Manejar correctamente una lista vacia de items

//[{name:"Producto A" ,price:10 ,quantity:2}]

const { calcularTotal } = require("../index");

describe("La funcion calcularTotal", () => {
    it("Debe calcular el total con una factura de un solo item", () => {
        expect(calcularTotal([{ name: "Producto A", price: 10, quantity: 2 }])).toEqual(20);
    });

    it("Debe calcular el total con una factura con varios items", () => {
        expect(calcularTotal([
            { name: "Producto A", price: 10, quantity: 2 },
            { name: "Producto B", price: 20, quantity: 3 },
            { name: "Producto C", price: 30, quantity: 4 },
        ])).toEqual(200);
    });

    it("Debe arrojar error 'Factura invalida' si la lista de items es vacia", () => {
        expect(() => calcularTotal([])).toThrowError("Factura inválida");
    });

});