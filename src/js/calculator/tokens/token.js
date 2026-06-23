export default class Token {
    constructor({ id, glyphIDs, glyphRegistry = null, type = "value", value = null, arity = null }) {
        this.id = id;
        this.glyphIDs = glyphs;
        this.glyphRegistry = glyphRegistry;
        this.type = type;
        this.value = value;
        this.arity = arity;
    }

    get width() {
        return this.glyphs.length;
    }

    getdisplayGlyphs(variant) {
        let variantGlyph = [];

        for (const glyph of this._glyphs) {
            variantGlyph.push(this.glyphRegistry.get(glyph, variant))
        }
    }
}
