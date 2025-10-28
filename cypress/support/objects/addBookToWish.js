class addBookToWish{
    typeAddBookToWish(name){
        cy.contains('div.card-title strong', name).closest('app-book-card').within(()=>{
            cy.get('app-addtowishlist span.material-icons').click();
            cy.wait(200)
          })
          cy.contains('Added to Wishlist!!!').should('be.visible')
          cy.wait(500)
    }
}module.exports = new addBookToWish()