//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {

    const codes = document.querySelectorAll(".code");

    codes[0].focus();

    codes.forEach((code, index) => {

        // Forward typing
        code.addEventListener("input", () => {

            if (code.value.length === 1 && index < codes.length - 1) {
                codes[index + 1].focus();
            }

        });

        // Backspace movement
        code.addEventListener("keydown", (e) => {

            if (e.key === "Backspace" && code.value === "" && index > 0) {
                codes[index - 1].focus();
            }

        });

    });

});
