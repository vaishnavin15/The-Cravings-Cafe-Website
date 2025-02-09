
//Theme toggle button
document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.querySelector(".themebutton");
    const themeIcon = themeButton.querySelector("i");
  
    // Check for saved theme in localStorage
    let currentTheme = localStorage.getItem("theme") || "dark";
    applyTheme(currentTheme);

    themeButton.addEventListener("click", function () {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(currentTheme);
        localStorage.setItem("theme", currentTheme); // Save theme preference
    });

    function applyTheme(theme) {
        if (theme === "light") {
            document.documentElement.classList.add("light-theme");
            themeIcon.classList.replace("bxs-sun", "bxs-moon"); // Change icon
        } else {
            document.documentElement.classList.remove("light-theme");
            themeIcon.classList.replace("bxs-moon", "bxs-sun"); // Change icon
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");

    // Only initialize if elements exist
    if (heroSliderNextBtn && heroSliderPrevBtn && heroSliderItems.length > 0) {
        let currentSlidePos = 0;
        let lastActiveSliderItem = heroSliderItems[0];
        let autoSlideInterval;

        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 80);
        });

        const updateSliderPos = function() {
            lastActiveSliderItem.classList.remove("active");
            heroSliderItems[currentSlidePos].classList.add("active");
            lastActiveSliderItem = heroSliderItems[currentSlidePos];
        }

        const slideNext = function() {
            currentSlidePos = currentSlidePos >= heroSliderItems.length - 1 ? 0 : currentSlidePos + 1;
            updateSliderPos();
        }

        const slidePrev = function() {
            currentSlidePos = currentSlidePos <= 0 ? heroSliderItems.length - 1 : currentSlidePos - 1;
            updateSliderPos();
        }

        // Manual navigation
        heroSliderNextBtn.addEventListener("click", slideNext);
        heroSliderPrevBtn.addEventListener("click", slidePrev);

        // Auto slide
        const autoSlide = function() {
            autoSlideInterval = setInterval(slideNext, 7000);
        }

        // Pause on hover
        [heroSliderNextBtn, heroSliderPrevBtn].forEach(btn => {
            btn.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
            btn.addEventListener('mouseout', autoSlide);
        });

        // Initialize
        autoSlide();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-option");
    const sections = document.querySelectorAll(".menu-card-container, .starter-container, .maincourse-container,.desserts-container,.mocktails-container");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Hide all menu sections
            sections.forEach(section => section.style.display = "none");

            // Show the selected section
            if (this.id === "breakfast-btn") {
                document.querySelector(".menu-card-container").style.display = "block";
            } else if (this.id === "starter-btn") {
                document.querySelector(".starter-container").style.display = "block";
            } else if (this.id === "maincourse-btn") {
                document.querySelector(".maincourse-container").style.display = "block";
            }else if(this.id ==="desserts-btn"){
                document.querySelector(".desserts-container").style.display ="block";
            }else if(this.id==="mocktails-btn"){
                document.querySelector(".mocktails-container").style.display ="block";

            }
        });
    });
});
