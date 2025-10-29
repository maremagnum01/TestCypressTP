import urls from "../../support/objects/urls"
import filter from "../../fixtures/filters.json"
import addFilter from "../../support/objects/addFilter"
import rangePrice from "../../support/objects/rangePrice"
describe('template spec', () => {
  it('FE | Lista de deseos', () => {
    // Entrar a la web a testear
    //Paso 1
    urls.typeUrlHome()

    // Paso 2 Filtrar por categoria Fantasy
    cy.filterCategory(filter.Fantasy)

    // Paso 3 agregar filtro por rango de precio a 509.99
    rangePrice.typeRangePrice(509.99)
  })
})