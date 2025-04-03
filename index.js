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

window.onload = function() {
    const inputField = document.querySelector('.where__form--text');
    const proceedSection = document.querySelector('.analysis__front');

    inputField.setAttribute("placeholder", "CLICK TO TYPE");
    inputField.addEventListener('focus', function() {
        inputField.setAttribute("placeholder", "WHERE ARE YOU FROM?");
    });

    inputField.addEventListener('input', function() {
        if (inputField.value.trim() !== "") {
            proceedSection.style.display = "inline-block";
        } else {
            proceedSection.style.display = "none";
        }
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("userInput");
    const proceedBtn = document.getElementById("proceedBtn");

    function toggleProceedButton() {
        if (inputField.value.trim() !== "") {
            proceedBtn.classList.remove("disabled")
        } else {
           proceedBtn.classList.add("disabled")
        }
    }
    proceedBtn.addEventListener("input", toggleProceedButton);
});
  