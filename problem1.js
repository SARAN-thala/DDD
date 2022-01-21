const shoppingCart = [];

function addToCart(product, quantity) {
    const cart = {
        product, quantity
    }
    return shoppingCart.push(cart)
}

function removeFromCart(product) {
    let cartIndex = shoppingCart.findIndex((item) => {
        return item.product === product;
    });

    return shoppingCart.splice(cartIndex, 1)
}

module.exports = {
    addToCart,
    shoppingCart,
    removeFromCart
}
