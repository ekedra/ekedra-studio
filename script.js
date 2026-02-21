// ==========================
// DARK MODE TOGGLE
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("darkModeToggle");

    // If toggle does not exist, stop
    if (!toggle) return;

    // Load saved preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
    }

    toggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });

});
