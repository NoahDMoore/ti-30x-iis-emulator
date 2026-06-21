import digits from "./digits.js";
import letters from "./letters.js";
import operators from "./operators.js";
import symbols from "./symbols.js";

export default class Glyphs {
    constructor() {
        this.glyphs = {
            ...digits,
            ...letters,
            ...operators,
            ...symbols
        }
        
        this.digits = digits;
        this.letters = letters;
        this.operators = operators;
        this.symbols = symbols;
    }

    get(character, variant="normal") {
        const glyph = this.glyphs[character];

        if (!glyph) {
            throw Error(`Unknown glyph: ${character}`);
        }

        const variantGlyph = glyph[variant];

        if (!variantGlyph) {
            throw Error(`Invalid variant '${variant}' for glyph '${character}'`);
        }

        return variantGlyph
    }
}