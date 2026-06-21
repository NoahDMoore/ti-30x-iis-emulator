export default class InputBuffer {
    constructor() {
        this.buffer = [];
        this.currentIndex = 0;
        this.displayPosition = 0;
    }

    getCursorPosition() {
        return this.currentIndex - this.displayPosition;
    }

    moveCursorLeft() {
        if (this.currentIndex <= 0) return; // Cannot move left past the start of the buffer.
        
        this.currentIndex--;
        this.updateViewport();
    }
    
    moveCursorRight() {
        if (this.currentIndex >= (this.buffer.length - 1)) return;

        this.currentIndex++;
        this.updateViewport();
    }

    getVisibleGlyphs() {
        return this.buffer.slice(
            this.displayPosition,
            this.displayPosition + 11
        );
    }

    push(glyph) {
        if (this.isFull() && this.currentIndex === this.buffer.length) {
            this.currentIndex--;
        }

        this.buffer[this.currentIndex] = glyph;
        this.currentIndex++;
        this.updateViewport();
    }

    insert(glyph) {
        this.buffer.splice(this.currentIndex, 0, glyph);
        this.currentIndex++;
        this.updateViewport();
    }

    delete() {
        this.buffer.splice(this.currentIndex, 1);
        this.updateViewport();
    }

    clear() {
        this.buffer = [];
        this.currentIndex = 0;
        this.displayPosition = 0;
    }

    updateViewport() {
        if (this.currentIndex < this.displayPosition) {
            this.displayPosition = this.currentIndex;
        }

        if (this.currentIndex > this.displayPosition + 10) {
            this.displayPosition = this.currentIndex - 10;
        }
    }

    isFull() {
        return this.buffer.length === 88;
    }

    hasLeftOverflow() {
        return this.displayPosition > 0;
    }

    hasRightOverflow() {
        return (this.displayPosition + 11 < this.buffer.length);
    }
}