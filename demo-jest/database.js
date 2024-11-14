const getItems = () => {
    // Simulamos que acá estamos buscando datos de una base de datos
    return [
        { name: "Producto A", price: 10, quantity: 2 },
        { name: "Producto B", price: 5, quantity: 3 },
    ]
};

module.exports = {
    getItems
};