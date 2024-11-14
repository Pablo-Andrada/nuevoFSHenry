const {calcularTotal} = require("../index");

const mockGetItems = jest.fn (() => {
    return [
        { name: "Producto A", price: 10, quantity: 2 },
        { name: "Producto B", price: 5, quantity: 3 },
    ]
});

// Quiero asegurarme de que cuando calcularTotal se ejecuta... la función que le envio tambien se ejecuta

describe("En la funcion calcularTotal: ", () => {
    it("La función 'getItems' que paso como parámetro debe ejecutarse al menos una vez", () => {
        calcularTotal(mockGetItems);
        expect(mockGetItems).toHaveBeenCalled();
    })
})