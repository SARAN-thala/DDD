const { addToCart, shoppingCart } = require("./problem1.js")

describe("Shopping cart", () => {
    test('Adding IPad to cart', () => {
        addToCart('IPad')
        expect(shoppingCart).toEqual(['IPad'])
    })

    test('Adding Hero ink Pen to cart', () => {
        addToCart('Hero ink Pen')
        expect(shoppingCart).toEqual(['IPad','Hero ink Pen'])
    })
})
