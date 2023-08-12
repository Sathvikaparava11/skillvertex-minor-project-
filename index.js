// const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const cartButton = document.getElementById('cart-button');
// const cartCount = document.getElementById('cart-count');

// let itemCount = 0;

// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         itemCount++;
//         cartCount.textContent = itemCount;
//     });
// });

// cartButton.addEventListener('click', () => {
//     alert(`You have ${itemCount} product(s) in your cart.`);
// });
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartButton = document.getElementById('cart-button');
const cartCount = document.getElementById('cart-count');
const cartSummary = document.getElementById('cart-summary');

let itemCount = 0;
let cartItems = [];

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        itemCount++;
        cartCount.textContent = itemCount;

        const productName = `Product ${index + 1} Name`;
        const productPrice = 19.99 + index * 5;
        cartItems.push({ name: productName, price: productPrice });

        updateCartSummary();
    });
});

cartButton.addEventListener('click', () => {
    alert(`You have ${itemCount} product(s) in your cart.`);
});

function updateCartSummary() {
    cartSummary.innerHTML = '';
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button class="remove-item" data-name="${item.name}">Remove</button>
        `;
        cartSummary.appendChild(itemElement);
    });

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeCartItem);
    });
}

function removeCartItem(event) {
    const itemName = event.target.dataset.name;
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        itemCount--;
        cartCount.textContent = itemCount;
        updateCartSummary();
    }
}
