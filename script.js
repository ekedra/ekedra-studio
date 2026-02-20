<script>
const searchData = [
    { type: "Book", title: "Erethria", category: "Fantasy Novel", link: "#" },
    { type: "Essay", title: "The Architecture of Law", category: "Civic Thought", link: "#" },
    { type: "Essay", title: "Space as Discipline", category: "Architecture", link: "#" },
    { type: "Service", title: "Architecture & Fit-Out", category: "Architecture", link: "#" },
    { type: "Service", title: "3D Modeling & Concept Design", category: "Design", link: "#" },
    { type: "Service", title: "Creative & Writing Consulting", category: "Creative", link: "#" },
    { type: "Service", title: "Branding Consultation", category: "Branding", link: "#" }
];

function performSearch() {
    const input = document.getElementById('site-search').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if(input.length < 2) return;

    const results = searchData.filter(item => 
        item.title.toLowerCase().includes(input) ||
        item.category.toLowerCase().includes(input) ||
        item.type.toLowerCase().includes(input)
    );

    if(results.length === 0) {
        resultsContainer.innerHTML = '<li>No results found.</li>';
        return;
    }

    results.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.title}</strong> <em>(${item.type})</em> - ${item.category}`;
        resultsContainer.appendChild(li);
    });
}
</script>