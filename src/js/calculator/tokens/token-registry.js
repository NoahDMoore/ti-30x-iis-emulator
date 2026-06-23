import Glyphs from "../../ui/display/glyphs/glyphs.js"
import Token from "./token.js";

export default class TokenRegistry {

    constructor() {
        this.glyphs = new Glyphs();

        this.compoundDefinitions = {

            permutation: {
                glyphs: ["n","P","r"],
                category: "function"
            }

        };

        this.types = {

            digit: new Set([
                ...Object.keys(this.glyphs.digits)
            ]),
            
            letter: new Set([
                ...Object.keys(this.glyphs.letters)
            ]),

            operator: new Set([
                ...Object.keys(this.glyphs.operators)
            ]),

            symbol: new Set([
                ...Object.keys(this.glyphs.symbols)
            ])
        };
    }

    get(id, variant="normal") {

        // Explicit definitions
        if (id in this.compoundDefinitions) {

            return new Token({
                id,
                ...this.compoundDefinitions[id],
                glyphRegistry: this.glyphs
            });
        }

        // Everything else defaults
        return new Token({
            id,
            glyphIDs: [id],
            type: this.inferType(id)
        });
    }

    inferType(id) {
        for (const [type, ids] of Object.entries(this.types)) {
            if (ids.has(id)) {
                return type;
            }
        }
        
        throw new Error(`Could not determine category for given glyph/token id: '${id}'`);
        
    }
}