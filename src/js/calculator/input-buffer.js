export default class InputBuffer {
    constructor(displayWidth=11, displayOffset = 0) {
        this.buffer = [];
        this.history = [];
        this.maxSize = 88;
        this.displayWidth = displayWidth;
        this.displayOffset = displayOffset;
        this.currentIndex = 0;
        this.historyIndex = null;
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
        return (this.displayPosition + this.displayWidth < this.buffer.length);
    }

    get isBrowsingHistory() {
        return this.historyIndex !== null;
    }

    set isBrowsingHistory(boolean) {
        if (boolean === true) {
            if (this.historyIndex !== null) return;

            this.historyIndex = 0;
        } else if (boolean === false) {
            this.historyIndex = null;
        }
    }

    get hasHistory() {
        return (this.history.length > 0);
    }

    get hasHistoryUp() {
        if (!this.isBrowsingHistory) {
            return this.history.length > 0;
        }

        return (this.historyIndex >= 0 && this.historyIndex < this.history.length - 1);
    }

    get hasHistoryDown() {
        return (this.isBrowsingHistory && this.historyIndex > 0);
    }

    get glyphPosition() {
        let glyphPosition = 0;
    
        for (let i = 0; i < this.currentIndex; i++) {
            glyphPosition += this.buffer[i].getWidth();
        }

        return glyphPosition;
    }

    get cursorPosition() {
        const glyphPosition = this.glyphPosition;
        return Math.max(0, Math.min(this.displayWidth - 1, glyphPosition - this.displayPosition));
    }
    
    get visibleTokens() {
        const visibleTokens = [];
        
        let glyphIndex = 0;
        
        for (let i = 0; i < this.buffer.length; i++) {
            const token = this.buffer[i];
            const start = glyphIndex;
            const end = start + (token.getWidth() - 1);
            
            if (end > this.displayPosition && start < (this.displayPosition + this.displayWidth)) {
                visibleTokens.push({
                    index: i,
                    token: token,
                    start: start,
                    end: end
                });
            }
            
            glyphIndex += end;
        }

        return visibleTokens;
    }

    get lastVisibleToken() {
        const visibleTokens = this.visibleTokens;
        const lastVisibleToken = visibleTokens.at(-1);

        return lastVisibleToken;
    }

    get visibleGlyphs() {
        const glyphs = [];

        for (const token of this.buffer) {
            glyphs.push(...token.glyphs.normal);
        }

        return glyphs.slice(
            this.displayPosition,
            this.displayPosition + this.displayWidth
        );
    }

    moveCursorLeft() {
        if (this.currentIndex <= 0) return; // Cannot move left past the start of the buffer.
        
        this.currentIndex--;
        this.updateViewport();
    }
    
    moveCursorRight() {
        if (this.currentIndex > (this.buffer.length - 1)) return;

        this.currentIndex++;
        this.updateViewport();
    }

    moveHistoryUp() {
        if (!this.hasHistoryUp) return;

        if (!this.isBrowsingHistory) {
            this.isBrowsingHistory = true;
            this.loadHistory();
        } else {
            this.historyIndex++;
            this.loadHistory();
        }
    }

    moveHistoryDown() {
        if (!this.isBrowsingHistory && this.hasHistory) {
            this.isBrowsingHistory = true;
            this.loadHistory();
            return;
        }

        if (!this.hasHistoryDown) return;

        this.historyIndex--;
        this.loadHistory();
    }

    addToHistory() {
        this.history.unshift([...this.buffer]);
        this.isBrowsingHistory = false;
    }

    loadHistory() {
        this.buffer = [...this.history[this.historyIndex]];
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
        if (this.currentIndex == 0 || this.currentIndex == this.buffer.length) {
            this.buffer = [];
            this.currentIndex = 0;
            this.isBrowsingHistory = false;
        } else {
            let bufferLength = this.buffer.length;
            for (let i = this.currentIndex; i < bufferLength; i++) {
                this.buffer.pop();
            }
        }
        this.updateViewport();
    }

    configureViewport(displayWidth=11, displayOffset) {
        this.displayWidth = displayWidth;
        this.displayOffset = displayOffset;
    }

    updateViewport() {
        if (this.buffer.length === 0) return;

        const glyphPosition = this.glyphPosition;
        const lastVisibleToken = this.lastVisibleToken;
        
        // Scroll left if cursor left viewport
        if (glyphPosition < this.displayPosition) {
            this.displayPosition = glyphPosition;
            return;
        }
        
        // Snap last token into viewport if the cursor is on the last token
        if (this.lastVisibleToken && this.currentIndex === lastVisibleToken.index) {
            this.displayPosition = lastVisibleToken.end - (this.displayWidth - 1);
            return;
        }

        // Scroll right if cursor exceeds viewport
        if (glyphPosition > this.displayPosition + (this.displayWidth - 1)) {
            this.displayPosition = glyphPosition - (this.displayWidth - 1);
        }
    }
}