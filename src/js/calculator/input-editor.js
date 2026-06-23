export default class InputEditor {
    constructor(inputBuffer, displayController) {
        this.inputBuffer = inputBuffer;
        this.displayController = displayController;
        this.isEnabled = false;
    }

    handleInput(input, insert=false) {
        input.forEach(token => {
            if (insert) {
                this.inputBuffer.insert(token);
            } else {
                this.inputBuffer.push(token);
            }
        });

        this.displayController.refreshDisplay();
    }

    deleteInput() {
        this.inputBuffer.delete();
        this.displayController.refreshDisplay();
    }

    clearInput() {
        this.inputBuffer.clear();
        this.displayController.refreshDisplay();
    }

    // Cursor
    moveCursorLeft() {
        this.inputBuffer.moveCursorLeft();
        this.displayController.refreshDisplay();
    }
    
    moveCursorRight() {
        this.inputBuffer.moveCursorRight();
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