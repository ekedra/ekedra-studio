document.addEventListener("DOMContentLoaded", function () {

    // DARK MODE
    const toggle = document.getElementById("darkModeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
    }

    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });


    // SEARCH
    const searchInput = document.getElementById("site-search");
    const results = document.getElementById("search-results");

    searchInput.addEventListener("keyup", function () {

        const value = searchInput.value.toLowerCase();
        results.innerHTML = "";

        if (value.length < 2) return;

        const searchable = document.querySelectorAll(".searchable, .essay h3");

        searchable.forEach(item => {

            const text = item.dataset?.title || item.textContent;

            if (text.toLowerCase().includes(value)) {
                const li = document.createElement("li");
                li.textContent = text;
                results.appendChild(li);
            }
        });

    });


    // AUTO IN-ARTICLE AD
    const essays = document.querySelectorAll(".essay-content");

    essays.forEach(content => {

        const paragraphs = content.querySelectorAll("p");

        if (paragraphs.length > 2) {

            const ad = document.createElement("div");
            ad.classList.add("in-article-ad");
            ad.textContent = "Advertisement";

            paragraphs[1].after(ad);
        }

    });

});
