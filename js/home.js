function includeHTML(id, file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return res.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;

            if (cssFile) {
                const linkTag = document.createElement("link");
                linkTag.rel = "stylesheet";
                linkTag.href = cssFile;
                document.head.appendChild(linkTag);
            }
        })
        .catch(err => {
            console.warn(err);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML("latest-placeholder", "/html/components/lastest.html");
});
