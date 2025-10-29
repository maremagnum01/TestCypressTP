import user from "../../fixtures/user.json"
import books from "../../fixtures/books.json"

describe('Template spec', ()=>{
    it('API 3 | Agregar elemento al carrito', () => {
        var url = `https://app.bookdbqa.online/api/shoppingcart/addToCart/${user[0].id}/${books[47].bookId}`
        var token = user[0].token
        cy.apiTest('POST', url, null, token, 200)
    });
})