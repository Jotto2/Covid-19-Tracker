const navbar = document.getElementById("navbar");

links = [
    {
        name: "home",
        link: "index.html"
    },
    {
        name: "countries",
        link: "countries.html"
    },
    {
        name: "symptoms",
        link: ""
    },
    {
        name: "prevention",
        link: ""
    },
    {
        name: "treatment",
        link: ""
    }
]

for(let i = 0; i < links.length; i++){
    navbar.innerHTML += `
    <div class="nav-item">
                <a href="${links[i].link}">
                    <span class="navbar-text">${links[i].name}</span>
                </a>
            </div>
    `
}