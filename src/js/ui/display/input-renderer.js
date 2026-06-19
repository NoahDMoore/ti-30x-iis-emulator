import CharacterCell from "./character-cell.js";

export default class InputRenderer {
    constructor(display) {
        this.display = display;
        this.characterCells = new Array(11);
        this.cursorPosition = 0;
        this.cursorOn = false;
        this.cursorInterval = null;

        for (let i = 0; i < 11; i++) {
            let position = i + 1;
            this.characterCells[i] = new CharacterCell(this.display, position);
        }
    }

    clear() {
        this.characterCells.forEach(cell => {
            cell.clear();
        });
    }

    async toggleCursor() {
        if (this.cursorOn) {
            clearInterval(this.cursorInterval);
            this.cursorOn = false;
        } else {
            this.cursorOn = true;

            while (this.cursorOn) {
                await this.characterCells[this.cursorPosition].blinkCursor();

                await new Promise(
                    resolve =>
                        setTimeout(resolve, 750)
                );
            }
        }
    }
}