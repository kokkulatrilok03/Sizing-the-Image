let imageElement = document.getElementById("image");
let defaultImageWidth = 200;
document.getElementById("image").style.width = defaultImageWidth + "px";
document.getElementById("imageWidth").textContent = defaultImageWidth + "px";

function onIncrement() {
    if (defaultImageWidth >= 300) {
        document.getElementById("warningMessage").textContent = "Too big. Decrease the size of the Image.";
    } else {
        defaultImageWidth += 5;
        document.getElementById("image").style.width = defaultImageWidth + "px";
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px";
        document.getElementById("warningMessage").textContent = "";
    }
}

function onDecrement() {
    if (defaultImageWidth <= 100) {
        document.getElementById("warningMessage").textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        defaultImageWidth -= 5;
        document.getElementById("image").style.width = defaultImageWidth + "px";
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px";
        document.getElementById("warningMessage").textContent = "";
    }
}