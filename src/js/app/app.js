import CalculatorView from "../ui/calculator-view.js";

export default class App {
    constructor(root) {
        this.root = root;
    }

    initialize() {
        this.calculator = new CalculatorView(this.root);
        this.calculator.initialize();
    }
}