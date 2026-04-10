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

const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));