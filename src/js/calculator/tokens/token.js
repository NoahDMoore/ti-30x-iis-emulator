export default class Token {
    constructor({ id, glyphs, type = "value", value = null, arity = null }) {
        this.id = id;
        this.glyphs = glyphs;
        this.type = type;
        this.value = value;
        this.arity = arity;
    }

    getWidth(variant="normal") {
        return this.glyphs[variant].length;
    }
}
