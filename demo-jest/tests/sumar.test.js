const sumar = require("../index");

const mockSumar = jest.fn(sumar);

describe("La función sumar", () => {
    it("Debe retornar null si es ejecutado con un valor no numérico", () => {
        expect(mockSumar(1, true)).toBe(null);
        expect(mockSumar(false, true)).toBe(null);
        expect(mockSumar(1, true)).toBe(null);
        expect(mockSumar("Hola", 2)).toBe(null);
    }),
    it("Debe retornar correctamente el resultado de la suma", () => {
            expect(mockSumar(200, 542)).toBe(742);
            expect(mockSumar(-3, 0)).toBe(-3);
            expect(mockSumar(0, 0)).toBe(0);
            expect(mockSumar(-2000, -542)).toBe(-2542);
    }),
        it("Debe haber registrado correctamente los argumentos 200 y 542", () => {
            expect(mockSumar).toHaveBeenCalledWith(200, 542);
    })
});