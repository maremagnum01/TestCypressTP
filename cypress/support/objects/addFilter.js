class addFilter{
    typeAddFilter(filtro){
        cy.contains('span.mdc-list-item__content', filtro).then(($btn)=>{
            if ($btn.length > 0){
                cy.wrap($btn).click()
            }else{
                cy.log("No se encontro Boton de filtro o el filtro solicitado.")
            }
        })
    }
}module.exports = new addFilter()