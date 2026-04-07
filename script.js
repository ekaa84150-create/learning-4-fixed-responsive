const menuBtn = document.getElementById("menu-btn")
const nav = document.querySelector("nav ul")

menuBtn.onclick = function() {
    nav.classList.toggle("active")
}

navLinks.forEach(link => {
    link.onclick = () => {
        nav.classList.remove("active")
    }
})