function includeHTML(id, file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return res.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(err => {
            console.warn(err);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML("nav-placeholder", "/html/components/navbar.html");
    includeHTML("copyright-placeholder", "/html/components/copyright.html");
});
