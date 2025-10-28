import user from "../fixtures/user.json"
import books from "../fixtures/books.json"

describe('Template spec', ()=>{
    it('API 3 | Agregar elemento al carrito', () => {
        var url = `https://app.bookdbqa.online/api/shoppingcart/addToCart/${user.id}/${books[47].bookId}`
        var token = user.token
        cy.apiTest('POST', url, null, token, 200)
    });
})