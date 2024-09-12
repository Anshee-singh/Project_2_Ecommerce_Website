let cartCount = 0;
const cartButton = document.querySelector('.cart button');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = button.getAttribute('data-price');
        cartCount++;
        updateCart();
        alert(`Item added to cart! Price: ${price}`);
    });
});

// Update cart display
function updateCart() {
    cartButton.innerText = Cart (${cartCount});
}