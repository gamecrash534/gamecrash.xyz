document.addEventListener("DOMContentLoaded", function() {
    ["header", "footer"].forEach(function(section) {
        fetch("/base/" + section + ".html")
            .then(response => response.text())
            .then(data => {
                document.getElementById(section).innerHTML = data;
            });
    });
});