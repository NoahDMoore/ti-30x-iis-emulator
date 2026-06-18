function addButtonEventListeners() {
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach(button => {
    button.addEventListener('mousedown', (event) => {
        console.log(button.id);
        button.classList.toggle("pressed");
        // handle button press
    });
    });

    document.addEventListener('mouseup', (event) => {
        buttons.forEach(button => {
            button.classList.remove("pressed");
        });
    });
}