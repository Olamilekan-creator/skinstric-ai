const innerBox = document.getElementById("innerBox");
const outerBox = document.getElementById("outerBox");

innerBox.addEventListener("mouseenter", () => {
    innerBox.style.transform = "scale(1.2)";
    outerBox.style.transform = "scale(1.1)";
});

innerBox.addEventListener("mouseleave", () => {
    innerBox.style.transform = "scale(1)";
    outerBox.style.transform = "scale(1)";
});


  