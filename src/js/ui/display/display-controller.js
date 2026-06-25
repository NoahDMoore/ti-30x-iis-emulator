import Glyphs from "./glyphs/glyphs.js";
import Indicators from "./indicators.js";
import InputRenderer from "./input-renderer.js";

export default class DisplayController {
    constructor(svg, inputBuffer) {
        this.svg = svg;
        this.display = null;
        this.inputBuffer = inputBuffer;
        this.inputRenderer = null;
        this.glyphs = new Glyphs;

        // Cursor
        this.insertMode = false;
        this.cursorEnabled = false;
        this.cursorTask = null;
        this.cursorGlyph = null;
    }

    initialize() {
        this.display = this.svg.getElementById("display-group");
        this.indicators = new Indicators(this.display);
        this.inputRenderer = new InputRenderer(this.display);
        
        // Cursor
        this.cursorGlyph = this.getCursorGlyph();

        this.clearDisplay();
    }

    clearDisplay() {
        this.inputBuffer.clear();
        this.indicators.clear();
        this.refreshDisplay();
    }

    refreshDisplay() {
        const visibleGlyphs = this.inputBuffer.visibleGlyphs;
        const displayWidth = this.inputBuffer.displayWidth;
        const displayOffset = this.inputBuffer.displayOffset;
        this.inputRenderer.render(visibleGlyphs, displayWidth, displayOffset);

        this.cursorGlyph = this.getCursorGlyph();

        this.updateIndicators();
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
            const cursorPosition = this.inputBuffer.cursorPosition;
            const displayOffset = this.inputBuffer.displayOffset;
            this.inputRenderer.showCursor(this.cursorGlyph, cursorPosition + displayOffset);
            await this.cursorWait();
            this.inputRenderer.hideCursor(cursorPosition + displayOffset);
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
        const memoryFullCursor = this.glyphs.get("cursorMemoryFull");

        if (this.inputBuffer.hasMemoryWarning) {
            return memoryFullCursor;
        }

        if (this.insertMode) {
            return insertCursor;
        }

        return normalCursor;
    }

    // Indicators
    updateIndicators() {
        const leftArrowIndicator = this.indicators.get("left-arrow-indicator");
        const rightArrowIndicator = this.indicators.get("right-arrow-indicator");
        const upArrowIndicator = this.indicators.get("up-arrow-indicator");
        const downArrowIndicator = this.indicators.get("down-arrow-indicator");
        
        if (this.inputBuffer.hasLeftOverflow) {
            this.indicators.indicatorOn(leftArrowIndicator);
        } else {
            this.indicators.indicatorOff(leftArrowIndicator);
        }

        if (this.inputBuffer.hasRightOverflow) {
            this.indicators.indicatorOn(rightArrowIndicator);
        } else {
            this.indicators.indicatorOff(rightArrowIndicator);
        }

        if (this.inputBuffer.hasHistoryUp) {
            this.indicators.indicatorOn(upArrowIndicator);
        } else {
            this.indicators.indicatorOff(upArrowIndicator);
        }

        if (this.inputBuffer.hasHistoryDown) {
            this.indicators.indicatorOn(downArrowIndicator);
        } else {
            this.indicators.indicatorOff(downArrowIndicator);
        }
    }
}