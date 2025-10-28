import user from "../fixtures/user.json"
import books from "../fixtures/books.json"

describe('Template spec', ()=>{
   it('API 4 | Realizar GET al carrito de compras', () => {
        //Realiaar GET, se espera codigo 200
        var url = `https://app.bookdbqa.online/api/shoppingcart/${user.id}`
        var token = user.token
        cy.apiTest('GET', url, null, token, 200)
    });
})