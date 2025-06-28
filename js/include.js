// Dynamically load Bootstrap CSS and JS
(function() {
    var bootstrap = document.createElement("script");
    bootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js";
    bootstrap.defer = true;
    var bootstrapIcons = document.createElement("script");
    bootstrapIcons.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.js";
    bootstrapIcons.defer = true;
    document.body.appendChild(bootstrap);
    document.body.appendChild(bootstrapIcons);
})();

// Add the header and footer dynamically
document.addEventListener("DOMContentLoaded", function() {
    ["header", "footer"].forEach(function(section) {
        fetch("/base/" + section + ".html")
            .then(response => response.text())
            .then(data => {
                document.getElementById(section).innerHTML = data;
            });
    });
});