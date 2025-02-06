
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

//Breakfast menu display
document.addEventListener("DOMContentLoaded", function () {
    const breakfastBtn = document.querySelector("#breakfast-btn");
    const menuCardContainer = document.querySelector(".menu-card-container");

    menuCardContainer.style.display = "none"; // Initially hidden

    breakfastBtn.addEventListener("click", function () {
        if (menuCardContainer.style.display === "none") {
            menuCardContainer.style.display = "block"; 
        } else {
            menuCardContainer.style.display = "none"; 
        }
    });
});
//Starter menu display
document.addEventListener("DOMContentLoaded", function () {
    const starterBtn = document.querySelector("#starter-btn");
    const starterContainer = document.querySelector(".starter-container");

    starterContainer.style.display = "none"; // Initially hidden

    starterBtn.addEventListener("click", function () {
        if (starterContainer.style.display === "none") {
            starterContainer.style.display = "block"; 
        } else {
            starterContainer.style.display = "none"; 
        }
    });
});



