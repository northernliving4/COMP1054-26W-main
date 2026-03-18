@charset "utf-8";

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");

html {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    background: #f7f7f7;
}

#container {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
}

.tabs {
    margin-top: 2rem;
}



.tabs ul[role="tablist"] {
    display: flex;
    gap: 0.5rem;
    padding: 0;
    margin: 0 0 1rem 0;
    list-style: none;
    border-bottom: 2px solid #ccc;
}

.tabs ul[role="tablist"] li[role="tab"] {
    margin: 0;
}

.tabs ul[role="tablist"] li[role="tab"] a {
    display: block;
    padding: 0.6rem 1rem;
    text-decoration: none;
    color: #444;
    background: #eaeaea;
    border-radius: 4px 4px 0 0;
    transition: background 0.2s ease, color 0.2s ease;
}

.tabs ul[role="tablist"] li[role="tab"] a:hover {
    background: #dcdcdc;
    color: #222;
}

.tabs ul[role="tablist"] li[role="tab"][aria-selected="true"] a {
    background: #fff;
    color: #000;
    border-bottom: 2px solid #fff;
    font-weight: 600;
}



.tabs [role="tabpanel"] {
    background: #fff;
    padding: 1.5rem;
    border: 2px solid #ccc;
    border-radius: 0 4px 4px 4px;
    display: none;
}


.tabs [role="tabpanel"][data-visible="true"] {
    display: block;
}
