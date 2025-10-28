class urls{
    typeUrlHome(){
        cy.visit('https://app.bookdbqa.online')
    }

    typeUrlWishList(){
        cy.visit('https://app.bookdbqa.online/wishlist')
    }

    typeUrlCartShopping(){
        cy.visit('https://app.bookdbqa.online/shopping-cart')
    }

    typeUrlLogin(){
        cy.visit('https://app.bookdbqa.online/login')
    }

    typeUrlRegister(){
        cy.visit('https://app.bookdbqa.online/register')
    }
}module.exports = new urls()