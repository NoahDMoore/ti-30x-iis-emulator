import InputRenderer from "./input-renderer.js";

export default class DisplayController {
    constructor(svg) {
        this.svg = svg;
        this.display = null;
        this.inputRenderer = null;
    }

    initialize() {
        this.display = this.svg.getElementById("display-group");
        this.inputRenderer = new InputRenderer(this.display);
    }

    clearDisplay() {
        this.inputRenderer.clear();
    }
}