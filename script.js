
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const topbar = document.querySelector(".topbar");

    // Toggle menu on icon click
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        topbar.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target) && !topbar.contains(event.target)) {
            navLinks.classList.remove("active");
            topbar.classList.toggle("active");
        }
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start" // Scroll to the top of the section
                });
            }
        });
    });
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
    const sections = document.querySelectorAll(".menu-card-container, .starter-container, .maincourse-container, .desserts-container, .mocktails-container");
    const menuCards = document.querySelectorAll(".menu-cards"); // Menu cards that trigger buttons

    // Function to show the selected section
    function showSection(sectionClass) {
        sections.forEach(section => section.style.display = "none"); // Hide all sections
        document.querySelector(sectionClass).style.display = "block"; // Show selected section
    }

    // Set breakfast menu as default visible
    showSection(".menu-card-container");

    // Add event listener to menu-option buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.id === "breakfast-btn") {
                showSection(".menu-card-container");
            } else if (this.id === "starter-btn") {
                showSection(".starter-container");
            } else if (this.id === "maincourse-btn") {
                showSection(".maincourse-container");
            } else if (this.id === "desserts-btn") {
                showSection(".desserts-container");
            } else if (this.id === "mocktails-btn") {
                showSection(".mocktails-container");
            }
        });
    });

    // Trigger menu-option buttons when clicking on menu cards
    menuCards.forEach(card => {
        card.addEventListener("click", function () {
            buttons.forEach(button => button.click()); 
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".about-image img");
    let index = 0;

    function rotateImages() {
        images.forEach((img, i) => {
            img.style.animation = "none"; // Reset animation
        });

        setTimeout(() => {
            images[index].style.zIndex = 1;
            images[index].style.opacity = 0.6;
            images[index].style.transform = "translate(60px, 40px)";

            let next = (index + 1) % images.length;
            images[next].style.zIndex = 3;
            images[next].style.opacity = 1;
            images[next].style.transform = "translate(0, 0)";

            let mid = (index + 2) % images.length;
            images[mid].style.zIndex = 2;
            images[mid].style.opacity = 0.8;
            images[mid].style.transform = "translate(30px, 20px)";

            index = next;
        }, 100); // Small delay before applying new styles
    }

    setInterval(rotateImages, 3000); // Change every 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const bookTableBtns = document.querySelectorAll(".bookatable, #bookatable, #bookatable2");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    bookTableBtns.forEach(btn => {
        if (btn) {  
            btn.addEventListener("click", function () {
                popup.style.display = "flex";
            });
        }
    });

    if (closeBtn) { 
        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    const cartIcon = document.getElementById("cart-icon");
    const cartPopup = document.getElementById("cart-popup");
    const closeCart = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const orderNow = document.getElementById("order-now");
    const orderSuccess = document.getElementById("order-success");

    // Show Cart Popup when clicking on cart icon
    cartIcon.addEventListener("click", function () {
        cartPopup.style.display = "block";
    });

    // Close Cart Popup
    closeCart.addEventListener("click", function () {
        cartPopup.style.display = "none";
    });

    // Add to Cart Functionality
    document.getElementById("menu-list").addEventListener("click", function (e) {
        if (e.target.classList.contains("add-to-cart")) {
            const button = e.target;
            const itemName = button.getAttribute("data-name");
            const itemPrice = parseFloat(button.getAttribute("data-price").replace('$', ''));
            const msgSpan = button.nextElementSibling;

            const existingItem = cart.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.quantity++;
                msgSpan.textContent = `Quantity: ${existingItem.quantity}`;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1, msgSpan: msgSpan });
                msgSpan.textContent = "Quantity: 1";
            }

            updateCart();
        }
    });

    // Update Cart Display
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.name}</td>
                <td>
                    <button class="qty-btn decrease" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="qty-btn increase" data-index="${index}">+</button>
                </td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="delete-btn" data-index="${index}">Remove</button></td>
            `;

            cartItems.appendChild(row);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);

        // Show empty cart message if no items
        if (cart.length === 0) {
            cartItems.innerHTML = "<tr><td colspan='4'>Your cart is empty</td></tr>";
        }

        // Quantity Increase / Decrease
        document.querySelectorAll(".increase").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart[index].quantity++;
                updateCart();
                updateMsgSpan(cart[index]); // Update cart-msg
            });
        });

        document.querySelectorAll(".decrease").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    updateCart();
                    updateMsgSpan(cart[index]); // Update cart-msg
                } else {
                    if (cart[index].msgSpan) {
                        cart[index].msgSpan.textContent = ""; // Clear message
                    }
                    cart.splice(index, 1); // Remove item if quantity reaches 0
                    updateCart();
                }
            });
        });

        // Delete Item
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                if (cart[index].msgSpan) {
                    cart[index].msgSpan.textContent = ""; // Clear message
                }
                cart.splice(index, 1); // Remove item
                updateCart();
            });
        });
    }

    // Function to update the cart-msg span when quantity changes
    function updateMsgSpan(item) {
        if (item.msgSpan) {
            item.msgSpan.textContent = `Quantity: ${item.quantity}`;
        }
    }

    // Order Now Functionality
    orderNow.addEventListener("click", function () {
        if (cart.length === 0) {
            orderSuccess.textContent = "Your cart is empty!";
            orderSuccess.style.color = "red";
            orderSuccess.style.display = "block";
        } else {
            orderSuccess.textContent = "Order received at the restaurant!";
            orderSuccess.style.color = "green";
            orderSuccess.style.display = "block";
            cart.forEach(item => {
                if (item.msgSpan) {
                    item.msgSpan.textContent = ""; // Clear message for all items
                }
            });
            cart = [];
            updateCart();
        }

        // Hide success message after 3 seconds
        setTimeout(() => {
            orderSuccess.style.display = "none";
        }, 5000);
    });
});


