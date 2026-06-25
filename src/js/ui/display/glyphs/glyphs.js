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

    get(glyphID, variant="normal") {
        const glyph = this.glyphs[glyphID];

        if (!glyph) {
            throw Error(`Unknown glyph: ${glyphID}`);
        }

        const variantGlyph = glyph[variant];

        if (!variantGlyph) {
            throw Error(`Invalid variant '${variant}' for glyph '${glyphID}'`);
        }

        return variantGlyph;
    }

    getMultiple(glyphIDs, variant) {
        let glyphs = [];
        for (let glyphID of glyphIDs) {
            const glyph = this.get(glyphID, variant);
            glyphs.push(glyph);
        }

        return glyphs;
    }
}