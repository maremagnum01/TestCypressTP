import user from "../fixtures/user.json"
import pageLogin from "../support/objects/pageLogin"
import books from "../fixtures/books.json"
import addBookToWish from "../support/objects/addBookToWish.js"
import elements from "../support/objects/elements.js"
import urls from "../support/objects/urls.js"


describe('template spec', () => {
  it('FE | Lista de deseos', () => {
    // Entrar a la web a testear
    //Paso 1
    urls.typeUrlHome()
    cy.get('span').contains('Login').click() // luego click en login 
    // pageLogin.ejecutarLogin(user.user, user.password)
    cy.execLogin(user.user, user.password)


    //Paso 2, agregar el libro de Steve Jobs a favoritos
    addBookToWish.typeAddBookToWish(books[47].title)


    //Paso 3, ir a la lista de deseos
    elements.typeWishList()

    //Paso 4, una vez en la lista de deseos, agregarlo al carrito
    cy.url('https://app.bookdbqa.online/wishlist')
    elements.typeAddCartBtn()
    cy.wait(500)


    //Paso 5 y por ultimo eliminarlo de deseados
    elements.typeRemoveWish()

  })

})