import Glyphs from "../../ui/display/glyphs/glyphs.js";

const glyphs = new Glyphs();

export default {
    "log": {
        id: "log",
        glyphIDs: ["l", "o", "g", "("],
        type: "function",
        arity: 1
    },

    "naturalLog": {
        id: "log",
        glyphIDs: ["l", "n", "("],
        type: "function",
        arity: 1
    },

    "eToThePowerOfX": {
        id: "log",
        glyphIDs: ["e", "^", "("],
        type: "function",
        arity: 1
    },

    "tenToThePowerOfX": {
        id: "tenToThePowerOf",
        glyphIDs: ["10", "^", "("],
        type: "function",
        arity: 1
    },

    "nPr": {
        id: "nPr",
        glyphIDs: ["space", "n", "P", "r", "space"],
        type: "function",
        arity: 2
    },

    "nCr": {
        id: "nCr",
        glyphIDs: ["space", "n", "C", "r", "space"],
        type: "function",
        arity: 2
    },

    "rand": {
        id: "rand",
        glyphIDs: ["R", "A", "N", "D"],
        type: "function",
        arity: 0
    },

    "randI": {
        id: "randI",
        glyphIDs: ["R", "A", "N", "D", "I", "("],
        type: "function",
        arity: 2
    },

    "fractionToFromDecimal": {
        id: "fractionToFromDecimal",
        glyphIDs: ["rightPointer", "F", "bidirectionalPointer", "D"],
        type: "function",
        arity: 1
    },

    "rectangularToPolarRadius": {
        id: "rectangularToPolarRadius",
        glyphIDs: ["R", "rightPointer", "P", "r"],
        type: "function",
        arity: 2
    },

    "rectangularToPolarAngle": {
        id: "rectangularToPolarRadius",
        glyphIDs: ["R", "rightPointer", "P", "theta"],
        type: "function",
        arity: 2
    },

    "rectangularToPolarX": {
        id: "rectangularToPolarRadius",
        glyphIDs: ["R", "rightPointer", "P", "x"],
        type: "function",
        arity: 2
    },

    "rectangularToPolarY": {
        id: "rectangularToPolarRadius",
        glyphIDs: ["R", "rightPointer", "P", "y"],
        type: "function",
        arity: 2
    },

    "fraction": {
        id: "fraction",
        glyphIDs: ["fraction"],
        type: "function",
        arity: 2
    },

    "mixedToFromSimpleFraction": {
        id: "mixedToFromSimpleFraction",
        glyphIDs: ["rightPointer", "A", "simpleFraction", "bidirectionalPointer", "mixedFraction"],
        type: "function",
        arity: 2
    }
}