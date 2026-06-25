import Glyphs from "../../ui/display/glyphs/glyphs.js"
import constantTokens from "./constant-tokens.js";
import functionTokens from "./function-tokens.js";
import Token from "./token.js";

export default class TokenRegistry {

    constructor() {
        this.glyphs = new Glyphs();

        this.tokens = {
            ...functionTokens,
            ...constantTokens
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

    get(id) {

        // Explicit definitions
        if (id in this.tokens) {

            return new Token({
                ...this.tokens[id]
            });
        }

        // Everything Infer From Glyph
        let type = this.inferType(id);

        return new Token({
            id,
            glyphs: {
                normal: [this.glyphs.get(id, "normal")]
            },
            type: type,
            value: (type == "digit") ? parseInt(id) : null
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