document.addEventListener("DOMContentLoaded", function () {

    // DARK MODE
    const toggle = document.getElementById("theme-toggle");

    toggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });

    // DROPDOWN
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdown = document.querySelector(".dropdown");

    dropdownBtn.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });

    // SEARCH
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const items = document.querySelectorAll(".searchable");

        items.forEach(item => {
            const text = item.getAttribute("data-title").toLowerCase();
            item.style.display = text.includes(filter) ? "block" : "none";
        });
    });

});
