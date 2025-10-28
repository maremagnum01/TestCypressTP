class rangePrice{
    typeRangePrice(valor){
        cy.get('body').then(($body)=>{
            const slider = $body.find('input.mdc-slider__input')
            if (slider.length > 0){
                cy.get('input.mdc-slider__input').invoke('val', valor).trigger('input').trigger('change')
            }else{
                cy.log("No se encontro el slider en la pagina")
            }
        })
    }
}module.exports = new rangePrice()