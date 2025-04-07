const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});


if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress").forEach(progress => {
        let percent = progress.getAttribute("data-percent");
        progress.style.width = percent + "%";
    });
});


document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const category = this.getAttribute("data-category");
        document.querySelectorAll(".project").forEach(project => {
            project.classList.remove("show");
            if (category === "all" || project.getAttribute("data-category") === category) {
                project.classList.add("show");
            }
        });
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    
    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();
});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.getElementById("year").textContent = new Date().getFullYear();