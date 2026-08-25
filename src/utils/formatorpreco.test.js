import {formatarpreco} from './formatarpreco';

describe("formatarpreco", () => {
    test("Formata um valor comum no padrão brasileiro", () => {
        const resultado = formatarpreco(99.9);
        expect(resultado).toBe("R$ 99,90");
    });

    test("Sempre mostra duas casas decimais", () => {
        expect(formatarpreco(19)).toBe("R$ 19,00");
        expect(formatarpreco(1234.56)).toBe("R$ 1234,50");
    });

    test("Usa vírgula, e não ponto, como separador", () => {
        expect(formatarpreco(10.25)).not.toContain(".");
        expect(formatarpreco(10.25)).toContain(",");
    });

});