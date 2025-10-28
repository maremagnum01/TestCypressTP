import elements from "../support/objects/elements.js"
import urls from "../support/objects/urls.js"
import user from "../fixtures/user.json"
import addBookToCart from "../support/objects/addBookToCart.js"
import pageCheckOut from "../support/objects/pageCheckOut.js"
import checkout from "../fixtures/chekOut.json"

describe('template spec', () => {
  it('Front', () => {
    // Entrar a la web a testear
    //Paso 1
    urls.typeUrlHome()

    elements.typeBtnLogin()
    cy.execLogin(user.user, user.password) // ------> commands

    //Paso 2
    addBookToCart.typeAddBookToCart()

    //Paso 3
    cy.url('https://app.bookdbqa.online')
    elements.typeGoToCart()
    
    // Paso 4
    elements.typeGoCheckOut()
    
    //Paso 5
    //Completar formulario
    pageCheckOut.typeExecFormCheckOut(checkout.Name, checkout.AddressOne, checkout.AddressTwo, checkout.PinCode, checkout.State)

    //Paso 6
    elements.typeButtonPlaceOrder()

    //Paso 7
    elements.typeSelectOrder()
  })

})