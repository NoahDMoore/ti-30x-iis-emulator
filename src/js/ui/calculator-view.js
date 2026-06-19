import ButtonController from "./button-controller.js";
import DisplayController from "./display/display-controller.js";

export default class CalculatorView {
    constructor(root) {
        this.root = root;
        this.calculator = null;
        this.svgFile = "../../assets/svg/calculator.svg";
        this.svg = null;
        this.buttonController = null;
        this.displayController = null;
    }

    async initialize() {
        await this.loadSVG();

        this.buttonController = new ButtonController(this.svg);
        this.buttonController.initialize();

        this.displayController = new DisplayController(this.svg);
        this.displayController.initialize();
    }

    async loadSVG(){
        await fetch(this.svgFile)
            .then(r=>r.text())
            .then(t=>{this.root.innerHTML=t})
            .catch(e=>console.log(e));
        this.svg = this.root.children[0];
        this.svg.setAttribute("id","calculator-svg");
        this.svg.setAttribute("width","auto");
        this.svg.setAttribute("height","100vh");
    }
}