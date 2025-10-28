class addBootToCart{
    typeAddBookToCart(name = null) {
        // Si se pasa un nombre, busca ese libro; si no, selecciona el primero disponible
        if (name) {
            cy.contains('div.card-title strong', name)
              .closest('app-book-card')
              .within(() => {
                  cy.contains('span', 'Add to Cart').click()
                  cy.wait(200)
              })
        } else {
            cy.get('app-book-card').first().within(() => {
                cy.contains('span', 'Add to Cart').click()
                cy.wait(200)
            })
        }
    
        cy.contains('One Item added to cart').should('be.visible')
        cy.wait(500)
    }
}module.exports = new addBootToCart()