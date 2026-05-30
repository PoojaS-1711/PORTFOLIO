document.addEventListener("DOMContentLoaded", () => {

    const themeButton =
        document.getElementById("themeToggle");

    if (!themeButton) return;

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme) {

        document.body.classList.add(savedTheme);

    } else {

        document.body.classList.add("dark-theme");

    }

    updateButtonText();

    themeButton.addEventListener("click", () => {

        if (
            document.body.classList.contains(
                "dark-theme"
            )
        ) {

            document.body.classList.remove(
                "dark-theme"
            );

            document.body.classList.add(
                "light-theme"
            );

            localStorage.setItem(
                "theme",
                "light-theme"
            );

        } else {

            document.body.classList.remove(
                "light-theme"
            );

            document.body.classList.add(
                "dark-theme"
            );

            localStorage.setItem(
                "theme",
                "dark-theme"
            );

        }

        updateButtonText();

    });

    function updateButtonText() {

        if (
            document.body.classList.contains(
                "dark-theme"
            )
        ) {

            themeButton.textContent =
                "☀️ Light Mode";

        } else {

            themeButton.textContent =
                "🌙 Dark Mode";

        }

    }

});