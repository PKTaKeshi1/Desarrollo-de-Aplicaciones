function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  const badge = document.getElementById("cart-count");
  if (badge) badge.textContent = count;
}

function addToCart(product) {
  let cart = getCart();
  const index = cart.findIndex(
    (item) => item.name === product.name && item.size === product.size && item.color === product.color
  );

  if (index >= 0) {
    cart[index].qty += product.qty;
  } else {
    cart.push(product);
  }

  saveCart(cart);
  alert(`${product.qty} x ${product.name} agregado(s) al carrito`);
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cartContainer");
  const checkout = document.getElementById("checkout");

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-muted">Tu carrito está vacío</p>`;
    checkout.innerHTML = "";
    return;
  }

  let html = `
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Talla</th>
          <th>Color</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
  `;

  let total = 0;

  cart.forEach((item, i) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    html += `
      <tr>
        <td>${item.name}</td>
        <td>${item.size}</td>
        <td>${item.color}</td>
        <td>
          <input type="number" min="1" value="${item.qty}" 
            class="form-control" style="width:80px"
            onchange="updateQty(${i}, this.value)">
        </td>
        <td>S/. ${item.price.toFixed(2)}</td>
        <td>S/. ${itemTotal.toFixed(2)}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removeItem(${i})">🗑</button>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;

  checkout.innerHTML = `
    <h4>Total: S/. ${total.toFixed(2)}</h4>
    <form class="mt-3 p-3 border rounded bg-light">
      <h5>Checkout</h5>
      <div class="mb-3">
        <label>Nombre completo</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="mb-3">
        <label>Correo electrónico</label>
        <input type="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label>Número de tarjeta</label>
        <input type="text" class="form-control" maxlength="16" required>
      </div>
      <button type="submit" class="btn btn-success">Finalizar compra</button>
    </form>
  `;
}

function updateQty(index, qty) {
  let cart = getCart();
  cart[index].qty = parseInt(qty) || 1;
  saveCart(cart);
  renderCart();
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

document.addEventListener("DOMContentLoaded", updateCartCount);
