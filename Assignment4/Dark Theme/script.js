function swapTheme() {
    document.getElementById("app").classList.toggle("night");
    document.getElementById("app").classList.toggle("day");

    document.getElementById("swap").classList.toggle("button_day");
    document.getElementById("swap").classList.toggle("button_night");
}