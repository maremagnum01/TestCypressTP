import user from "../fixtures/user.json"
import books from "../fixtures/books.json"

describe('Template spec', ()=>{
    it('API 5 | Error al editar carrito de compras', () => {
        //Se espera codigo 405, ya que el Request PUT no esta definido.
        var url = `https://app.bookdbqa.online/api/shoppingcart/addToCart/2010/${user.id}/${books[2].bookId}`
        var token = user.token
        var body = {
            "book": {
                "bookId": 4,
                "title": "Harry Potter and the Goblet of Fire",
                "author": "JKR",
                "category": "Fiction",
                "price": 321.00,
                "coverFileName": "9d31690d-3b1d-4faa-a1d2-3a680a935008HP4.jpg"
            },
            "quantity": 2
        }
        cy.apiTest('PUT',url, null, token, 405)
    });
})