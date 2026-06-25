import CharacterCell from "./character-cell.js";
import Glyphs from "./glyphs/glyphs.js";

export default class InputRenderer {
    constructor(display) {
        this.display = display;
        this.glyphs = new Glyphs();
        this.characterCells = new Array(11);

        for (let i = 0; i < 11; i++) {
            let position = i + 1;
            this.characterCells[i] = new CharacterCell(this.display, position);
        }
    }

    render(glyphs, displayWidth=11, displayOffset=0) {
        console.log(`Width: ${displayWidth}, Offset: ${displayOffset}`);
        for (let i = 0; i < displayWidth; i++) {
            const glyph = glyphs[i];

            if (glyph) {
                this.characterCells[i + displayOffset].renderGlyph(glyph);
            } else {
                this.characterCells[i + displayOffset].clear();
            }
        }
    }

    showCursor(cursorGlyph, cursorPosition) {
        this.characterCells[cursorPosition].renderGlyph(cursorGlyph, false);
    }

    hideCursor(cursorPosition) {
        this.characterCells[cursorPosition].restore();
    }
}