import App from "./app/app.js";

const root = document.getElementById("app-container");
const app = new App(root);

app.initialize();

export {app}