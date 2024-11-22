const products = [
  { id: 1, name: "Produto Orgânico A", price: 120, category: "organicos" },
  { id: 2, name: "Produto Reciclável B", price: 80, category: "reciclaveis" },
  { id: 3, name: "Produto Orgânico C", price: 200, category: "organicos" },
  { id: 4, name: "Produto Reciclável D", price: 50, category: "reciclaveis" },
];

const productContainer = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const categorySelect = document.getElementById("category-select");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const checkoutButton = document.getElementById('checkout-button');


function renderProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>R$${product.price.toFixed(2)}</p>
      `;
    productContainer.appendChild(productDiv);
  });
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;
  const maxPrice = parseInt(priceRange.value, 10);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "todos" || product.category === selectedCategory) &&
      product.price <= maxPrice &&
      product.name.toLowerCase().includes(searchTerm)
    );
  });

  renderProducts(filteredProducts);
}

searchButton.addEventListener("click", filterProducts);
categorySelect.addEventListener("change", filterProducts);
priceRange.addEventListener("input", () => {
  priceValue.textContent = `Até R$${priceRange.value}`;
  filterProducts();
});


let cart = [];

function renderProducts(filteredProducts) {
  productContainer.innerHTML = '';
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>R$${product.price.toFixed(2)}</p>
      <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
    `;
    productContainer.appendChild(productDiv);
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id, 10);
      addToCart(productId);
    });
  });
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<p>O carrinho está vazio.</p>';
    cartTotal.textContent = '0.00';
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>R$${(item.price * item.quantity).toFixed(2)}</span>
      <button class="remove-from-cart" data-id="${item.id}">Remover</button>
    `;
    cartItems.appendChild(cartItemDiv);
  });

  cartTotal.textContent = total.toFixed(2);

  document.querySelectorAll('.remove-from-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id, 10);
      removeFromCart(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (!product) return;

  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function finalizePurchase() {
  if (cart.length === 0) {
    alert('O carrinho está vazio. Adicione produtos antes de finalizar a compra.');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`Compra realizada com sucesso! Valor total: R$${total.toFixed(2)}`);
  
  cart = [];
  renderCart();
}

checkoutButton.addEventListener('click', finalizePurchase);
renderProducts(products);
renderCart();
