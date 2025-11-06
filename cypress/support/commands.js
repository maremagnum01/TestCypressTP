import pageLogin from "./objects/pageLogin"
import addFilter from "./objects/addFilter"
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('execLogin',(user,password)=>{
    pageLogin.ejecutarLogin(user,password)
})

Cypress.Commands.add('filterCategory', (filter)=>{
    addFilter.typeAddFilter(filter)
})


Cypress.Commands.add('apiTest', (method, url, body = null, token = null, code) => {
    cy.request({
      method: `${method}`,
      url: `${url}`,
      failOnStatusCode: false,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `${token}`
      },
      // Solo agrega el body si el método lo requiere
      ...(['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && body ? { body } : {})
    }).then((response) => {
      expect(response.status).to.eq(code)
    })
  })

Cypress.Commands.add('selectElements', (cant_elements)=>{
  //Este cmd selecciona libros en este proyecto.
    const cantidad = cant_elements
      cy.get('div.p-1').then(($elements)=>{
        const seleccionar = $elements.slice(0, cantidad)
        cy.wrap(seleccionar).as('elementos')
      })
      cy.get('@elementos').each(($libros)=>{
        cy.wrap($libros).should('exist')
      })
})