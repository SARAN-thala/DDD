const shoppingCart = [];

function addToCart(product, quantity) {
    const cart = {
        product, quantity, isRemoved: false
    }
    return shoppingCart.push(cart)
}

function removeFromCart(product) {
    shoppingCart.forEach((item) => {
        if (item.product === product) {
            return item.isRemoved = true;
        }
    });
}

function showRemovedItems() {
    let removedItems = shoppingCart.filter((item) => item.isRemoved === true);
    return removedItems.flatMap(item => item.product).toString()
}

module.exports = {
    addToCart,
    shoppingCart,
    removeFromCart,
    showRemovedItems
}
