const text = document.getElementById("text-container");

document.getElementById("colorchange").onclick = function () {
    const color = document.getElementById("colorbox").value;
    text.style.color = color;
};

document.getElementById("fontsize").oninput = function () {
    text.style.fontSize = this.value + "px";
};

document.getElementById("italic").onclick = function () {
    if (text.style.fontStyle === "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic";
    }
};

document.getElementById("underline").onclick = function () {
    if (text.style.textDecoration === "underline") {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "underline";
    }
};

document.getElementById("bold").onclick = function () {
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal";
    } else {
        text.style.fontWeight = "bold";
    }
};

document.getElementById("list").onchange = function () {
    text.style.fontFamily = this.value;
};

document.getElementById("getstyle").onclick = function () {
    const styles = window.getComputedStyle(text);
    const cssText = `color: ${text.style.color || styles.color}; font-size: ${text.style.fontSize || styles.fontSize}; font-family: ${text.style.fontFamily || styles.fontFamily}; text-decoration: ${text.style.textDecoration || styles.textDecoration}; font-style: ${text.style.fontStyle || styles.fontStyle}; font-weight: ${text.style.fontWeight || styles.fontWeight};`;
    document.getElementById("css-props").innerText = cssText;
};