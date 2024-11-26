const nombre: string = "Jorge";

const saludar = (name:string):string => {
    return `Hola ${name}`
}

console.log(saludar(nombre));

saludar("Pedro");
saludar("Maria");

const calcularTotal = (quantity: number, price: number): number => {
    return quantity * price;
}

console.log( calcularTotal(5, 10));
