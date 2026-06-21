export default class CharacterCell {
    constructor(display, position) {
        this.display = display;
        this.pixels = [];
        this.currentGlyph = [0,0,0,0,0,0,0];

        for (let i = 1; i <= 35; i++) {
            this.pixels.push(
                this.display.querySelector(
                    `#input-char-${position}-pixel-${i}`
                )
            );
        }
    }

    pixelOn(index) {
        this.pixels[index].style.visibility = "visible";
    }

    pixelOff(index) {
        this.pixels[index].style.visibility = "hidden";
    }

    allOn() {
        this.pixels.forEach((pixel, index) => {
            this.pixelOn(index);
        });
    }

    restore() {
        this.renderGlyph(this.currentGlyph, false);
    }

    clear() {
        this.pixels.forEach((pixel, index) => {
            pixel.style.visibility = "hidden";
        });

        this.currentGlyph = [0,0,0,0,0,0,0];
    }

    renderGlyph(glyph, overwrite=true) {
        if (overwrite) {
            this.currentGlyph = glyph;
        }

        glyph.forEach((row, rowIndex) => {
            for (let col = 0; col < 5; col++) {
                const mask = 1 << (4 - col);
                const bitIsSet = (row & mask) !== 0;

                let pixelIndex = (rowIndex * 5) + col;

                if (bitIsSet == 1) {
                    this.pixelOn(pixelIndex);
                } else {
                    this.pixelOff(pixelIndex);
                }
            }
        });
    }
}