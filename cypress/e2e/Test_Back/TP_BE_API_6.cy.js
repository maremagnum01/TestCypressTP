import user from "../../fixtures/user.json"
import books from "../../fixtures/books.json"

describe('Template spec', ()=>{
    it('API 6 | Eliminar el carrito de compras', () => {
        //usar metodo DELETE se espera codigo 200
        var url = `https://app.bookdbqa.online/api/shoppingcart/${user[0].id}`
        var token = user[0].token
        cy.apiTest('DELETE', url, null, token, 200)
    });
})