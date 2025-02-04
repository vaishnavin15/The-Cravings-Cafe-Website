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