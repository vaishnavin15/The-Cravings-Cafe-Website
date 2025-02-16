// Menu Data
const menuData = {
  breakfast: [
    {
      name: "Strawberry Pancakes",
      price: "$15.00",
      image: "assests/bf1.jpg",
      description:
        "Fluffy, golden pancakes topped with juicy strawberries and a drizzle of sweetness!",
      badge: "Seasonal",
    },
    {
      name: "French Toast",
      price: "$7.00",
      image: "assests/bf2.jpg",
      description:
        "Fluffy bread soaked in eggs, milk, cinnamon, and vanilla, pan-fried to golden perfection!",
    },
    {
      name: "Chicken Cheese Croissant",
      price: "$10.00",
      image: "assests/bf3.jpg",
      description:
        "Buttery croissant stuffed with grilled chicken, melted cheese, and creamy mayo!",
    },
    {
      name: "Sweet Crepes",
      price: "$8.50",
      image: "assests/bf4.jpg",
      description:
        "Thin crepes made with flour, eggs, and milk, filled with chocolate, caramel, or fresh berries!",
    },
    {
      name: "Shakshouka",
      price: "$12.00",
      image: "assests/bf5.jpg",
      description:
        "Poached eggs in a rich, spiced tomato sauce with onions, peppers, and aromatic herbs.",
    },
    {
      name: "Fruity Waffle",
      price: "$9.00",
      image: "assests/bf6.jpg",
      description:
        "Crispy vanilla waffles topped with fresh strawberries, bananas, and maple syrup!",
    },
  ],
  starters: [
    {
      name: "Paneer Tikka",
      price: "$15.00",
      image: "assests/st1.jpg",
      description:
        "Smoky, marinated paneer grilled to perfection with spices and bell peppers!",
    },
    {
      name: "Cheese Corn Balls",
      price: "$7.00",
      image: "assests/st2.jpg",
      description:
        "Crispy golden bites filled with gooey cheese, sweet corn, and herbs!",
    },
    {
      name: "Lobster Shots",
      price: "$18.00",
      image: "assests/st3.jpg",
      description:
        "Succulent lobster chunks in a zesty, creamy shot of flavorful seafood sauce!",
    },
    {
      name: "Chiken Kebab",
      price: "$11.50",
      image: "assests/st4.jpg",
      description:
        "Juicy minced chicken skewers infused with bold spices and chargrilled!",
    },
    {
      name: "Loaded Nachos",
      price: "$10.00",
      image: "assests/st5.jpg",
      description:
        "Crunchy nachos piled high with cheese, salsa, jalapeños, and sour cream!",
    },
    {
      name: "Tomato Bruschetta",
      price: "$9.00",
      image: "assests/st6.jpg",
      description:
        "Crispy baguette topped with fresh tomatoes, basil, olive oil, and garlic! ",
    },
  ],
  maincourse: [
    { 
        name: "Veg Farmhouse Pizza", 
        price: "$14.00", 
        image: "/assests/mc1.jpg", 
        description: "A cheesy delight loaded with fresh veggies, olives, and oregano on a crispy crust!" 
    },
    { 
        name: "Chicken Alfredo Pasta", 
        price: "$16.00", 
        image: "/assests/mc2.jpg", 
        description: "Creamy Alfredo sauce, tender chicken, and parmesan tossed with silky fettuccine!" 
    },
    { 
        name: "Club Sandwich", 
        price: "$10.00", 
        image: "/assests/mc3.jpg", 
        description: "Triple-layered toast stacked with chicken, lettuce, tomato, cheese, and a tangy mayo spread!" 
    },
    { 
        name: "Gyoza Dumplings", 
        price: "$20.00", 
        image: "assests/special-dish-banner.jpg", 
        description: "Japanese pan-fried dumplings, crisp and golden on the bottom and juicy inside." 
    },
    { 
        name: "Chicken Lasagna", 
        price: "$17.00", 
        image: "/assests/mc5.jpg", 
        description: "Layers of pasta, juicy chicken, rich marinara, and gooey cheese baked to perfection!" 
    },
    { 
        name: "Chicken Biryani Jar", 
        price: "$15.00", 
        image: "/assests/mc6.jpg", 
        description: "Aromatic basmati rice, spiced chicken, caramelized onions, and saffron sealed in a jar!" 
    },
  ],
  desserts: [
    { 
        name: "Tiramisu", 
        price: "$10.00", 
        image: "/assests/ds1.jpg", 
        description: "Layers of espresso-soaked sponge, creamy mascarpone, cocoa, and a hint of coffee liqueur!" 
    },
    { 
        name: "Berry Cheesecake", 
        price: "$13.00", 
        image: "/assests/ds2.jpg", 
        description: "Velvety cheesecake topped with a fresh berry compote on a buttery biscuit crust!" 
    },
    { 
        name: "Biscoff Cheesecake", 
        price: "$10.50", 
        image: "/assests/ds3.jpg", 
        description: "Smooth cheesecake infused with caramelized Biscoff spread on a crunchy biscuit base!" 
    },
    { 
        name: "Chocolate Brownie with Icecream", 
        price: "$9.00", 
        image: "/assests/ds4.jpg", 
        description: "Fudgy chocolate brownie served warm with a scoop of vanilla ice cream!" 
    },
    { 
        name: "Nutella Hazelnut Cheesecake", 
        price: "$11.00", 
        image: "/assests/ds5.jpg", 
        description: "Rich Nutella cheesecake loaded with crunchy hazelnuts on a chocolatey base!" 
    },
    { 
        name: "Chocolate Mini Cake", 
        price: "$7.50", 
        image: "/assests/ds6.jpg", 
        description: "Moist chocolate sponge layered with ganache and dusted with cocoa!" 
    },
  ],
  mocktails: [
    { 
        name: "Virgin Mojito", 
        price: "$5.00", 
        image: "/assests/mk1.jpg", 
        description: "A refreshing blend of mint, lime, and soda!" 
    },
    { 
        name: "Blue Lagoon Mojito", 
        price: "$6.00", 
        image: "/assests/mk2.jpg", 
        description: "A cool twist with blue curaçao syrup, lime, and mint!" 
    },
    { 
        name: "Citrus Mango Splash", 
        price: "$6.50", 
        image: "/assests/mk3.jpg", 
        description: "Mango meets orange in a citrusy burst of goodness!" 
    },
    { 
        name: "Tropical Orange Twist", 
        price: "$5.50", 
        image: "/assests/mk4.jpg", 
        description: "A zesty and sweet mix of orange and pineapple!" 
    },
    { 
        name: "Cranberry Splash", 
        price: "$5.00", 
        image: "/assests/mk5.jpg", 
        description: "A sweet-tart splash of cranberry and lime!" 
    },
    { 
        name: "Virgin Piña Colada", 
        price: "$6.00", 
        image: "/assests/mk6.jpg", 
        description: "A creamy coconut and pineapple tropical treat!" 
    },
  ],
};

// Function to Generate Menu Dynamically
function generateMenu(category) {
  const menuContainer = document.getElementById("menu-list");
  const menuTitle = document.getElementById("menu-title");

  menuContainer.innerHTML = ""; // Clear existing content
  menuTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter

  if (menuData[category]) {
    menuData[category].forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.innerHTML = `
                <div class="menu-card hover:card">
                    <figure class="card-bannerr" style="width: 100px; height: 100px;">
                        <img src="${
                          item.image
                        }" width="100" height="100" loading="lazy" class="img-cover">
                    </figure>
                    <div>
                        <div class="title-wrapper">
                            <h3 class="title-3">
                                <a href="#" class="card-title">${item.name}</a>
                            </h3>
                            ${
                              item.badge
                                ? `<span class="badge">${item.badge}</span>`
                                : ""
                            }
                            <span class="span">${item.price}</span>
                        </div>
                        <p class="card-text">${item.description}</p>
                        <button class="add-to-cart" data-name="${
                          item.name
                        }" data-price="${item.price}">Add to Cart</button>
                        <span class="cart-msg"></span>
                    </div>
                </div>
            `;
      menuContainer.appendChild(menuItem);
    });
  } else {
    menuContainer.innerHTML = "<p>No items available in this category.</p>";
  }

  // Scroll to the menu section
  document.getElementById("menu-display").scrollIntoView({ behavior: "smooth" });
}

// Event Listener for Menu Buttons
document.querySelectorAll(".menu-option").forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    generateMenu(category);
  });
});

// Event Listener for Service Cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", function () {
    const categoryText = this.querySelector(".card-title a").textContent.toLowerCase();
    let category;
    switch (categoryText) {
      case "main course":
        category = "maincourse";
        break;
      default:
        category = categoryText;
    }
    generateMenu(category);
  });
});

// Load Breakfast Menu by Default on Page Load
document.addEventListener("DOMContentLoaded", () => generateMenu("breakfast"));