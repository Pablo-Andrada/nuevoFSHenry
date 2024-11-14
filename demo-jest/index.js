// const sumar = (a, b) => {
//     if (typeof a != "number" || typeof b != "number") return null;
//     const resultado = a + b;
//     return resultado;
// }



// const calcularTotal = (items) => {
//     if (!items.length) throw ("Factura inválida");

//     let total = 0;

//     for (let item of items) {
//         total += item.quantity * item.price;
//     }
//     return total;
// }
const { getItems } = require("./database");

const calcularTotal = (getItems) => {
    const items = getItems();

    let total = 0;
    for (let item of items) total += item.quantity * item.price;

    return total;
}

console.log(calcularTotal(getItems));

module.exports = {
    calcularTotal
};