const sumar = (a, b) => {
    if (typeof a != "number" || typeof b != "number") return null;
    const resultado = a + b;
    return resultado;
}

module.exports = sumar;