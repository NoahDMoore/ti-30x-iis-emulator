export default class InputBuffer {
    constructor() {
        this.buffer = [];
        this.maxSize = 88;
        this.currentIndex = 0;
        this.displayPosition = 0;
    }

    get hasMemoryWarning() {
        return this.buffer.length >= this.maxSize - 8;
    }

    get isFull() {
        return this.buffer.length >= this.maxSize;
    }

    get hasLeftOverflow() {
        return this.displayPosition > 0;
    }

    get hasRightOverflow() {
        return (this.displayPosition + 11 < this.buffer.length);
    }

    get cursorPosition() {
        return this.currentIndex - this.displayPosition;
    }

    get visibleTokens() {
        return this.buffer.slice(
            this.displayPosition,
            this.displayPosition + 11
        );
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

    push(token) {
        if (this.isFull && this.currentIndex === this.buffer.length) {
            this.currentIndex--;
        }

        this.buffer[this.currentIndex] = token;
        this.currentIndex++;
        this.updateViewport();
    }

    insert(token) {
        if (this.isFull) {
            return;
        }

        this.buffer.splice(this.currentIndex, 0, token);
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
        let displayPosition;

        if (this.currentIndex < 10) {
            displayPosition = 0;
        } else {
            displayPosition = this.currentIndex - 10;
        }

        this.displayPosition = displayPosition;
    }
}