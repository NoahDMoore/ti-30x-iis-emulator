import CharacterCell from "./character-cell.js";

export default class InputRenderer {
    constructor(display) {
        this.display = display;
        this.characterCells = new Array(11);

        for (let i = 0; i < 11; i++) {
            let position = i + 1;
            this.characterCells[i] = new CharacterCell(this.display, position);
        }
    }
}