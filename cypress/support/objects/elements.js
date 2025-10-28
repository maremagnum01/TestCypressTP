class elementsIcons{
    typeWishList(){
        cy.contains('mat-icon', 'favorite').then(($btn)=>{
            if ($btn.length > 0){
                cy.wrap($btn).click()
            }else{
                cy.log("No se encontro boton de favoritos o lista de deseos")
            }
        })
    }

    typeAddCartBtn(){
        cy.contains('span', 'Add to Cart').then(($btn)=>{
            if ($btn.length > 0){
                cy.wrap($btn).click()
                cy.contains('One Item added to cart').should('be.visible')
            }else{
                cy.log("No se encontro boton de agregar al carrito")
            }
        })
    }

    typeRemoveWish(){
        cy.contains('span.mdc-button__label', 'Remove from Wishlist').then(($btn)=>{
            if ($btn.length > 0){
                cy.wrap($btn).click()
                cy.contains('Removed from Wishlist!!!').should('be.visible')
            }else{
                cy.log("No se encontro boton de eliminar de desados")
            }
        })
    }
    typeGoToCart() {
        cy.contains('button[mat-ripple-loader-class-name="mat-mdc-button-ripple"]', 'shopping_cart')
        .then(($btn) => {
            if ($btn.length > 0) {
                cy.wrap($btn).should('be.visible').click()
            } else {
                cy.log("No se encontró el botón del carrito")
            }
        })
    }

    typeGoCheckOut(){
        cy.contains('button.mdc-button.mat-mdc-button-base.my-2.mdc-button--raised.mat-mdc-raised-button.mat-warn', 'CheckOut').then(($btn)=>{
            if ($btn.length > 0 ){
                cy.wrap($btn).should('be.visible').click()
            }else{
                cy.log("No se encontro boton de CheckOut")
            }
        })
    }

    typeButtonPlaceOrder(){
        cy.contains('button', 'Place Order').then(($btn)=>{
            if ($btn.length > 0){
                cy.wrap($btn).should("be.visible").click()
            }else{
                cy.log("No se encontro boton de Place Order")
            }
        })
    }

    typeSelectOrder(){
        cy.get('td[class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-orderDate mat-column-orderDate ng-tns-c151581814-0 ng-star-inserted"]').should('be.visible').first().click()
    }

    typeBtnLogin(){
        cy.contains('span', 'Login').then(($btn)=>{
            if ($btn.length > 0 ){
                cy.wrap($btn).click()
            }else{
                cy.log("No se encontro boton de Login ")
            }
        })
    }
}module.exports = new elementsIcons()