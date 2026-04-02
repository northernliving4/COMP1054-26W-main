const table = document.getElementById("standings");
new Tablesort(table);

table.querySelectorAll("th").forEach(th => {
    th.addEventListener("click", () => {
        table.querySelectorAll("th").forEach(h => h.classList.remove("sort-asc", "sort-desc"));

        if (th.classList.contains("sort-up")) {
            th.classList.add("sort-asc");
        } else {
            th.classList.add("sort-desc");
        }
    });
});
