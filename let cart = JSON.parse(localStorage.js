// =======================
// CART SETUP
// =======================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in UI
function updateCart() {
  const count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.length;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  showToast(name + " added to cart 🛒");
}

// =======================
// WIKIPEDIA REDIRECT
// =======================
function openWiki(topic) {
  if (!topic) return;

  const formatted = topic.trim().replace(/\s+/g, "_");
  const url = "https://en.wikipedia.org/wiki/" + formatted;

  window.open(url, "_blank");
}

// =======================
// TOAST NOTIFICATION
// =======================
function showToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;

  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "black";
  toast.style.color = "white";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "6px";
  toast.style.fontSize = "14px";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.3s ease";

  document.body.appendChild(toast);

  // fade in
  setTimeout(() => {
    toast.style.opacity = "1";
  }, 100);

  // fade out
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2000);
}

// =======================
// HERO BUTTON SCROLL
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const heroBtn = document.querySelector(".hero button");

  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      const productsSection = document.querySelector(".products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Initialize cart on page load
  updateCart();
});