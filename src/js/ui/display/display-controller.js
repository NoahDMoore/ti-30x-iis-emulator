import Glyphs from "./glyphs/glyphs.js";
import Indicators from "./indicators.js";
import InputBuffer from "./input-buffer.js";
import InputRenderer from "./input-renderer.js";

export default class DisplayController {
    constructor(svg) {
        this.svg = svg;
        this.display = null;
        this.inputRenderer = null;
        this.glyphs = new Glyphs;

        // Cursor
        this.cursorEnabled = false;
        this.cursorTask = null;
        this.cursorPosition = 0;
        this.cursorGlyph = null;
    }

    initialize() {
        this.display = this.svg.getElementById("display-group");
        this.indicators = new Indicators(this.display);
        this.inputBuffer = new InputBuffer(this.display);
        this.inputRenderer = new InputRenderer(this.display);
        
        // Cursor
        this.cursorGlyph = this.getCursorGlyph();
        this.cursorPosition = this.inputBuffer.getCursorPosition();
    }

    clearDisplay() {
        this.indicators.clear();
        this.clearInput();
    }

    refreshDisplay() {
        const visibleGlyphs = this.inputBuffer.getVisibleGlyphs();
        this.inputRenderer.render(visibleGlyphs);

        this.cursorGlyph = this.getCursorGlyph();
        this.cursorPosition = this.inputBuffer.getCursorPosition();

        this.updateIndicators();
    }

    // Input
    handleInput(input) {
        input.forEach(glyph => {
            this.inputBuffer.push(glyph);
        });

        this.refreshDisplay();
    }

    deleteInput() {
        this.inputBuffer.delete();
        this.refreshDisplay();
    }

    clearInput() {
        this.inputBuffer.clear();
        this.refreshDisplay();
    }

    // Cursor
    moveCursorLeft() {
        this.inputBuffer.moveCursorLeft();
        this.refreshDisplay();
    }
    
    moveCursorRight() {
        this.inputBuffer.moveCursorRight();
        this.refreshDisplay();
    }

    startCursor() {
        if (this.cursorTask) {
            return; // Cursor is already running.
        }

        this.cursorEnabled = true;

        this.cursorTask = this.cursorLoop();
    }

    stopCursor() {
        this.cursorEnabled = false;
    }

    async cursorLoop() {
        while (this.cursorEnabled) {
            const cursorPosition = this.cursorPosition;
            this.inputRenderer.showCursor(this.cursorGlyph, cursorPosition);
            await this.cursorWait();
            this.inputRenderer.hideCursor(cursorPosition);
            await this.cursorWait();
        }

        this.cursorTask = null;
    }

    async cursorWait() {
        await new Promise(
            resolve =>
                setTimeout(resolve, 750)
        );
    }

    getCursorGlyph() {
        const normalCursor = this.glyphs.get("cursor");
        const insertCursor = this.glyphs.get("insert");
        const memoryFullCursor = this.glyphs.get("cursor_memory_full");

        if (this.inputBuffer.isFull()) {
            return memoryFullCursor;
        }

        //if (this.insertMode) {
        //    return insertCursor;
        //}

        return normalCursor;
    }

    // Indicators
    updateIndicators() {
        const leftArrowIndicator = this.indicators.get("left-arrow-indicator");
        const rightArrowIndicator = this.indicators.get("right-arrow-indicator");
        
        if (this.inputBuffer.hasLeftOverflow()) {
            this.indicators.indicatorOn(leftArrowIndicator);
        } else {
            this.indicators.indicatorOff(leftArrowIndicator);
        }

        if (this.inputBuffer.hasRightOverflow()) {
            this.indicators.indicatorOn(rightArrowIndicator);
        } else {
            this.indicators.indicatorOff(rightArrowIndicator);
        }

    }
}