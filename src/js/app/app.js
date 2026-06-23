import InputBuffer from "../calculator/input-buffer.js";
import InputEditor from "../calculator/input-editor.js";
import CalculatorView from "../ui/calculator-view.js";

export default class App {
    constructor(root) {
        this.root = root;
    }

    async initialize() {
        this.inputBuffer = new InputBuffer();

        this.ui = new CalculatorView(this.root, this.inputBuffer);
        await this.ui.initialize();

        this.inputEditor = new InputEditor(this.inputBuffer, this.ui.displayController);
    }
}