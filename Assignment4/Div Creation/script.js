function createDiv(width, height, text) {
    const container = document.getElementById("container");
    const newDiv = document.createElement("div");

    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.style.border = "1px solid black";
    newDiv.style.padding = "10px";
    newDiv.style.backgroundColor = "#f0f0f0";
    newDiv.style.boxSizing = "border-box";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "center";

    newDiv.textContent = text;

    container.appendChild(newDiv);
}


window.createDiv = createDiv;