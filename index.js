const innerBox = document.getElementById("innerBox");
const outerBox = document.getElementById("outerBox");

innerBox.addEventListener("mousenter", () => {
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
    const statusMessage = document.getElementById("statusMessage")

    function toggleProceedButton() {
        if (inputField.value.trim() !== "") {
            proceedBtn.classList.remove("disabled")
        } else {
           proceedBtn.classList.add("disabled")
        }
    }
    inputField.addEventListener("input", toggleProceedButton);

    async function sendData() {
        const userInput = inputField.value.trim();
        if (!userInput) return;
        const data = { user_input: userInput};
        try {
            proceedBtn.innerHTML = "Processing...";
            proceedBtn.classList.add("disabled");

            const response = await fetch("https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                statusMessage.innerHTML = "Success! Data submitted.";
                statusMessage.style.color = "green";
                inputField.value = "";
            } else {
                throw new Error(result.message || "Failed to submit data.");
            }
        } catch (error) {
            statusMessage.innerHTML = error.message;
            statusMessage.style.color = "red";
        } finally {
            proceedBtn.innerHTML = `<i class="fa-solid fa-caret-right front__back"></i>`;
            toggleProceedButton();
        }
    }
    proceedBtn.addEventListener("click", function () {
        if (!proceedBtn.classList.contains("disabled")) {
            sendData();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('galleryInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageElement = document.getElementById('selectedImage');
                imageElement.src = e.target.result;
                imageElement.style.display = 'block'; // Show the selected image
            }
            reader.readAsDataURL(file);
        }
    });

    const galleryImage = document.querySelector('.gallery');
    galleryImage.addEventListener('gallery', function() {
        document.getElementById('galleryInput').click(); // Triggering the file input click
    });
});
  