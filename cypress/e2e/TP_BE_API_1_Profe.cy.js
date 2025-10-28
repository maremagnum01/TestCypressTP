import user from "../fixtures/user.json"
import books from "../fixtures/books.json"

describe('Template spec', ()=>{
    it('API', () => {
        var url = `https://app.bookdbqa.online/api/CheckOut/${user.id}`
        var body = {
                    "orderDetails": [
                        {
                            "book": {
                                "bookId": 2,
                                "title": "Harry Potter and the Chamber of Secrets",
                                "author": "JKR",
                                "category": "Mystery",
                                "price": 236,
                                "coverFileName": "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg"
                            },
                            "quantity": 1
                        }
                    ],
                    "cartTotal": 2483
                }
        cy.apiTest('POST', url, body, null, 401)
    });
})