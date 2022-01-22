const { addToCart, shoppingCart, removeFromCart, showRemovedItems } = require("./problem1.js")

describe("Shopping cart", () => {
    test('Adding IPad with quantity to cart', () => {
        addToCart('IPad', 1)
        expect(shoppingCart).toEqual([{"product": "IPad", "quantity": 1, "isRemoved": false}])
    })

    test('Adding Hero ink Pen to cart', () => {
        addToCart('Hero ink Pen', 1)
        expect(shoppingCart).toEqual([{"product": "IPad", "quantity": 1, "isRemoved": false}, {"product": "Hero ink Pen", "quantity": 1, "isRemoved": false}])
    })

    test('Adding 2 quantity GM Cricket bat to cart', () => {
        addToCart('GM Cricket bat', 2)
        expect(shoppingCart).toEqual([{"product": "IPad", "quantity": 1, "isRemoved": false}, {"product": "Hero ink Pen", "quantity": 1, "isRemoved": false},{"product": "GM Cricket bat", "quantity": 2, "isRemoved": false}])
    })

    test('remove IPad from cart', () => {
        removeFromCart('IPad')
        expect(shoppingCart).toEqual([{"product": "IPad", "quantity": 1, "isRemoved": true}, {"product": "Hero ink Pen", "quantity": 1, "isRemoved": false},{"product": "GM Cricket bat", "quantity": 2, "isRemoved": false}])
    })

    test('show removed items from cart', () => {
        removeFromCart('IPad')
        removeFromCart('GM Cricket bat')
        expect(showRemovedItems()).toEqual("IPad,GM Cricket bat")
    })
})
