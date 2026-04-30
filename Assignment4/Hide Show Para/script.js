function toggleVisibility() {
    const para = document.getElementById("useless-paragraph");

    if (para.style.display === "none") {
        para.style.display = "block";  // show
    } else {
        para.style.display = "none";   // hide
    }
}