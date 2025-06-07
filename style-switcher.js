// toogle
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}
// them light dan


// Day/Night Theme Toggle
const dayNightToggle = document.querySelector(".day-night");
const icon = dayNightToggle.querySelector("i");

dayNightToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
});

// Initial Icon Setup
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
    } else {
        icon.classList.add("fa-moon");
    }
});
