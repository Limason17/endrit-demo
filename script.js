const menuBtn = document.getElementById("menuBtn");
const navPanel = document.getElementById("navPanel");
const navLinks = document.querySelectorAll(".nav-panel a");
const mobileBookingBar = document.querySelector(".mobile-booking-bar");
const sections = document.querySelectorAll("section[id]");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navPanel.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navPanel.classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});

window.addEventListener("scroll", () => {
    if (mobileBookingBar) {
        if (window.scrollY > 520) {
            mobileBookingBar.classList.add("show");
        } else {
            mobileBookingBar.classList.remove("show");
        }
    }

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-link");
        }
    });
});