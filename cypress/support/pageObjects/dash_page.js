/// <reference types="cypress" />

const el = require('../../support/elements/dash_elements').ELEMENTS

class dash {

    validarTextoDash(texto) {

        cy.get(el.titulo)
            .should('have.text', `${texto}`)
    }

} export default new dash();