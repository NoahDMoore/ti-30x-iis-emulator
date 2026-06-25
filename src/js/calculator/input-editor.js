export default class InputEditor {
    constructor(inputBuffer, displayController) {
        this.inputBuffer = inputBuffer;
        this.displayController = displayController;
        this.isEnabled = false;
        this.inputType = "normal" // "normal" or "insert"
    }

    handleInput(input) {
        input.forEach(token => {
            if (this.inputType === "insert") {
                this.inputBuffer.insert(token);
            } else {
                this.inputBuffer.push(token);
            }
        });

        this.displayController.refreshDisplay();
    }

    deleteInput() {
        this.inputBuffer.delete();
        this.unsetInsertMode(false);
        this.displayController.refreshDisplay();
    }

    clearInput() {
        this.inputBuffer.clear();
        this.unsetInsertMode(false);
        this.displayController.refreshDisplay();
    }

    submitInput() {
        this.inputBuffer.addToHistory();
        this.unsetInsertMode(false);
        this.displayController.refreshDisplay();
    }

    // Cursor
    setInsertMode() {
        this.inputType = "insert";
        this.displayController.insertMode = true;
        this.displayController.refreshDisplay();
    }

    unsetInsertMode(refresh=true) {
        this.inputType = "normal";
        this.displayController.insertMode = false;
        if (refresh) {
            this.displayController.refreshDisplay();
        }
    }

    moveCursorLeft() {
        this.inputBuffer.moveCursorLeft();
        this.unsetInsertMode(false);
        this.displayController.refreshDisplay();
    }
    
    moveCursorRight() {
        this.inputBuffer.moveCursorRight();
        this.unsetInsertMode(false);
        this.displayController.refreshDisplay();
    }

    moveHistoryUp() {
        this.inputBuffer.moveHistoryUp();
        this.unsetInsertMode(false);
        this.displayController.refreshDisplay();
    }

    moveHistoryDown() {
        this.inputBuffer.moveHistoryDown();
        this.unsetInsertMode(false);
        this.displayController.refreshDisplay();
    }

    // Enable/Disable
    enable() {
        this.isEnabled = true;
        this.displayController.startCursor();
    }

    disable() {
        this.isEnabled = false;
        this.displayController.stopCursor();
    }

}