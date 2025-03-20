document.addEventListener("DOMContentLoaded", function () {
    const btnScrollTop = document.getElementById("btnScrollTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnScrollTop.style.display = "flex"; // Asegura que sea visible
        } else {
            btnScrollTop.style.display = "none";
        }
    });

    btnScrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});