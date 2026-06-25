export default async function loadSVG(root, svgPath) {
    await fetch(svgPath)
        .then(r=>r.text())
        .then(t=>{root.innerHTML=t})
        .catch(e=>console.log(e));
    const svg = root.children[0];
    svg.setAttribute("id","calculator-svg");
    svg.setAttribute("width","auto");
    svg.setAttribute("height","100vh");

    return svg;
}