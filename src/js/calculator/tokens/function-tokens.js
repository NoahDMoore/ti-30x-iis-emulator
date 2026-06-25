import Glyphs from "../../ui/display/glyphs/glyphs.js";

const glyphs = new Glyphs();

export default {
    "log": {
        id: "log",
        glyphs: {
            normal: glyphs.getMultiple(["l", "o", "g", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "naturalLog": {
        id: "log",
        glyphs: {
            normal: glyphs.getMultiple(["l", "n", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "eToThePowerOfX": {
        id: "log",
        glyphs: {
            normal: glyphs.getMultiple(["e", "^", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "tenToThePowerOfX": {
        id: "tenToThePowerOf",
        glyphs: {
            normal: glyphs.getMultiple(["10", "^", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "scientificNotation": {
        id: "scientificNotation",
        glyphsIDs: {
            normal: glyphs.getMultiple(["E"], "normal")
        },
        type: "function",
        arity: 2
    },

    "nPr": {
        id: "nPr",
        glyphs: {
            normal: glyphs.getMultiple(["space", "n", "P", "r", "space"], "normal"),
            menu: glyphs.getMultiple(["n", "P", "r"], "superscript")
        },
        type: "function",
        arity: 2
    },

    "nCr": {
        id: "nCr",
        glyphs: {
            normal: glyphs.getMultiple(["space", "n", "C", "r", "space"], "normal"),
            menu: glyphs.getMultiple(["n", "C", "r"], "superscript")
        },
        type: "function",
        arity: 2
    },

    "factorial": {
        id: "factorial",
        glyphs: {
            normal: glyphs.getMultiple(["!"], "normal"),
            menu: glyphs.getMultiple(["!"], "superscript")
        },
        type: "function",
        arity: 1
    },

    "rand": {
        id: "rand",
        glyphs: {
            normal: glyphs.getMultiple(["R", "A", "N", "D"], "normal"),
            menu: glyphs.getMultiple(["R", "A", "N", "D"], "superscript"),
        },
        type: "function",
        arity: 0
    },

    "randI": {
        id: "randI",
        glyphs: {
            normal: glyphs.getMultiple(["R", "A", "N", "D", "I", "("], "normal"),
            menu: glyphs.getMultiple(["R", "A", "N", "D", "I"], "superscript")
        },
        type: "function",
        arity: 2
    },

    "fractionToFromDecimal": {
        id: "fractionToFromDecimal",
        glyphs: {
            normal: glyphs.getMultiple(["rightPointer", "F", "bidirectionalPointer", "D"], "normal")
        },
        type: "function",
        arity: 1
    },

    "rectangularToPolarRadius": {
        id: "rectangularToPolarRadius",
        glyphs: {
            normal: glyphs.getMultiple(["R", "rightPointer", "P", "r", "("], "normal"),
            menu: glyphs.getMultiple(["R", "rightPointer", "P", "r"], "superscript")
        },
        type: "function",
        arity: 2
    },

    "rectangularToPolarAngle": {
        id: "rectangularToPolarRadius",
        glyphs: {
            normal: glyphs.getMultiple(["R", "rightPointer", "P", "theta", "("], "normal"),
            menu: glyphs.getMultiple(["R", "rightPointer", "P", "theta"], "superscript")
        },
        type: "function",
        arity: 2
    },

    "rectangularToPolarX": {
        id: "rectangularToPolarRadius",
        glyphs: {
            normal: glyphs.getMultiple(["R", "rightPointer", "P", "x", "("], "normal"),
            menu: glyphs.getMultiple(["R", "rightPointer", "P", "x"], "superscript")
        },
        type: "function",
        arity: 2
    },

    "rectangularToPolarY": {
        id: "rectangularToPolarRadius",
        glyphs: {
            normal: glyphs.getMultiple(["R", "rightPointer", "P", "y", "("], "normal"),
            menu: glyphs.getMultiple(["R", "rightPointer", "P", "y"], "superscript")
        },
        type: "function",
        arity: 2
    },

    "fraction": {
        id: "fraction",
        glyphs: {
            normal: glyphs.getMultiple(["fraction"], "normal")
        },
        type: "function",
        arity: 2
    },

    "mixedToFromSimpleFraction": {
        id: "mixedToFromSimpleFraction",
        glyphs: {
            normal: glyphs.getMultiple(["rightPointer", "A", "simpleFraction", "bidirectionalPointer", "mixedFraction"], "normal")
        },
        type: "function",
        arity: 2
    },

    "sin": {
        id: "sin",
        glyphs: {
            normal: glyphs.getMultiple(["s", "i", "n", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "inverseSin": {
        id: "inverseSin",
        glyphs: {
            normal: glyphs.getMultiple(["s", "i", "n", "-1", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "cos": {
        id: "cos",
        glyphs: {
            normal: glyphs.getMultiple(["c", "o", "s", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "inverseCos": {
        id: "inverseCos",
        glyphs: {
            normal: glyphs.getMultiple(["c", "o", "s", "-1", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "tan": {
        id: "tan",
        glyphs: {
            normal: glyphs.getMultiple(["t", "a", "n", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "inverseTan": {
        id: "inverseTan",
        glyphs: {
            normal: glyphs.getMultiple(["t", "a", "n", "-1", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "xRoot": {
        id: "xRoot",
        glyphs: {
            normal: glyphs.getMultiple(["xRootIndex", "root"], "normal")
        },
        type: "function",
        arity: 2
    },

    "squareRoot": {
        id: "squareRoot",
        glyphs: {
            normal: glyphs.getMultiple(["root", "("], "normal")
        },
        type: "function",
        arity: 1
    },

    "square": {
        id: "square",
        glyphs: {
            normal: glyphs.getMultiple(["squared"], "normal")
        },
        type: "function",
        arity: 1
    },

    "exponent": {
        id: "exponent",
        glyphs: {
            normal: glyphs.getMultiple(["^"], "normal")
        },
        type: "function",
        arity: 2
    },

    "invert": {
        id: "invert",
        glyphs: {
            normal: glyphs.getMultiple(["-1"], "normal")
        },
        type: "function",
        arity: 1
    },

    "percent": {
        id: "percent",
        glyphs: {
            normal: glyphs.getMultiple(["%"], "normal")
        },
        type: "function",
        arity: 1
    }
}
