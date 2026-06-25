import Glyphs from "../../ui/display/glyphs/glyphs.js";

const glyphs = new Glyphs();

export default {
    "userConstantK": {
        id: "userConstantK",
        glyphs: {
            normal: glyphs.getMultiple(["K", "equals"], "normal")
        },
        type: "dataEntry",
        arity: 1
    },

    "pi": {
        id: "pi",
        glyphs: {
            normal: glyphs.getMultiple(["pi"], "normal")
        },
        type: "constant",
        value: Math.PI,
        arity: 1
    },
}
