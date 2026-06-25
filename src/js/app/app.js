import ButtonController from "../ui/input/button-controller.js";
import DisplayController from "../ui/display/display-controller.js";
import InputBuffer from "../calculator/input-buffer.js";
import InputEditor from "../calculator/input-editor.js";
import TokenRegistry from "../calculator/tokens/token-registry.js";
import loadSVG from "../ui/load-svg.js";

export default class App {
    constructor(root) {
        this.root = root;

        this.buttonController = null;
        this.displayController = null;
        this.inputBuffer = null;
        this.inputEditor = null;
        this.svg = null;
        this.tokenRegistry = null;
    }

    async initialize() {
        this.svg = await loadSVG(this.root, "../assets/svg/calculator.svg");
        
        this.inputBuffer = new InputBuffer();

        this.buttonController = new ButtonController(this.svg);
        this.buttonController.initialize();

        this.displayController = new DisplayController(this.svg, this.inputBuffer);
        this.displayController.initialize();

        this.inputEditor = new InputEditor(this.inputBuffer, this.displayController);
        this.tokenRegistry = new TokenRegistry();
    }
}