document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");

  // Example product data (replace with your own data)
  const products = [
    { name: "Electronic", image: "1.jpeg" },
    { name: "Groceries", image: "2.webp" },
    { name: "Car part", image: "3.webp" },
  ];

  // Populate product list
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product");
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      
    `;
    productList.appendChild(productItem);
  });
});
