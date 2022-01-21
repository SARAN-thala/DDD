const { addToCart, shoppingCart, removeFromCart } = require("./problem1.js")

describe("Shopping cart", () => {
    test('Adding IPad with quantity to cart', () => {
        addToCart('IPad', 1)
        expect(shoppingCart).toEqual([{"product": "IPad", "quantity": 1}])
    })

    test('Adding Hero ink Pen to cart', () => {
        addToCart('Hero ink Pen', 1)
        expect(shoppingCart).toEqual([{"product": "IPad", "quantity": 1}, {"product": "Hero ink Pen", "quantity": 1}])
    })

    test('Adding 2 quantity GM Cricket bat to cart', () => {
        addToCart('GM Cricket bat', 2)
        expect(shoppingCart).toEqual([{"product": "IPad", "quantity": 1}, {"product": "Hero ink Pen", "quantity": 1},{"product": "GM Cricket bat", "quantity": 2}])
    })

    test('remove IPad from cart', () => {
        removeFromCart('IPad')
        expect(shoppingCart).toEqual([{"product": "Hero ink Pen", "quantity": 1},{"product": "GM Cricket bat", "quantity": 2}])
    })
})
