export default class ButtonController {
    constructor(svg) {
        this.svg = svg;
        this.buttons = [];
        this.activePointer = null;
    }

    initialize() {
        this.svg.querySelectorAll(".btn").forEach(button => {
            this.buttons.push(
                {
                    id: button.id,
                    element: button
                }
            )
        });
        
        this.bindButtonEvents();
    }

    bindButtonEvents() {
        // Handle Button Press
        this.buttons.forEach(button => {
            button.element.addEventListener('pointerdown', (event) => {
                this.activePointer = {
                    id: event.pointerId,
                    button: button.element
                };

                this.animatePress(button);
            });

            button.element.addEventListener('pointerup', (event) => {
                // Only execute if the same button that was pressed is released
                if (!this.activePointer) return;
                if (this.activePointer.id !== event.pointerId) return;
                if (this.activePointer.button !== button.element) return;

                this.animateRelease(button);
                this.handlePress(button);
                this.activePointer = null;
                // handle button press
                // Update display
            });

            button.element.addEventListener('pointercancel', () => {
                this.animateRelease(button);
            });

            button.element.addEventListener('pointerleave', () => {
                this.animateRelease(button);
            });
        });
    }

    animatePress(button) {
        button.element.classList.add("pressed");
    }

    animateRelease(button) {
        button.element.classList.remove("pressed");
    }

    handlePress(button) {
        console.log(button.id);
    }

    simulateButtonPress(buttonID) {
        let button = this.buttons.find((button) => button.id == buttonID);

        this.animatePress(button);
        this.handlePress(button);
        setTimeout(() => {
            this.animateRelease(button)
        }, 200);
    }
}