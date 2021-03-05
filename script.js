// icon button
const toggle = document.getElementById("toggle");
// nav
const nav = document.getElementById("nav");

// toggle button listens for click event
toggle.addEventListener("click", () => {
    // toggle active class on nav
    nav.classList.toggle("active");
})