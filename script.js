const menuBtn = document.getElementById("menu-btn")
const nav = document.querySelector("nav ul")
const navLinks = document.querySelectorAll("nav ul li a")

menuBtn.onclick = function() {
    nav.classList.toggle("active")
}

navLinks.forEach(link => {
    link.onclick = () => {
        nav.classList.remove("active")
    }
})

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scroll", window.scrollY > 10);
});

const toggleBtn = document.getElementById("dark-mode-toggle")
toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

const skills = document.querySelectorAll('.skill-progress');

function animateSkills() {
  skills.forEach(skill => {
    const progress = skill.getAttribute('data-progress');
    skill.style.width = progress;
  });
}