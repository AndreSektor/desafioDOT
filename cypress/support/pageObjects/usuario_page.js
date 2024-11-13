/// <reference types="cypress" />

const el = require('../elements/menu_elements').ELEMENTS
const elus = require('../elements/usuario_elements').LISTA
const elcr = require('../elements/usuario_elements').CRIACAO

var faker = require('faker-br');
let usuarioG

class usuario {

    acessarMenuAdmin() {

        cy.get(el.menuAdmin)
            .should('be.visible')
            .click()
    }

    validarListaUsuarios() {

        Object.values(elus).forEach(elemento => {
            cy.get(elemento)
                .should('be.visible')
                .should('not.be.disabled')
        });
    }

    acessarCriarUsuario() {

        cy.get(elus.btn_adicionar_usuario)
            .should('be.visible')
            .click()
    }

    validarCriacaoUsuario() {

        Object.values(elcr).forEach(elemento => {
            cy.get(elemento)
                .should('be.visible')
                .should('not.be.disabled')
            cy.get(elcr.titulo_usuario_criacao)
                .should('have.text', 'Add User')    
        });
    }

    preencherFormulario() {

        cy.get(elcr.select_user_Role)
            .click()
            .type('{downarrow}')
            .type('{enter}')

        cy.get(elcr.input_employee_name)
            .type('Sara')
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
        
        cy.get(elcr.select_status)  
            .click()
            .type('{downarrow}')
            .type('{enter}')  

        usuarioG = faker.name.title();
        cy.get(elcr.input_user_name).type(usuarioG);

        cy.get(elcr.input_password)
            .type(Cypress.env('PasswordPadrao'))

        cy.get(elcr.input_confirm_password)
            .type(Cypress.env('PasswordPadrao'))

        cy.get(elcr.btn_salvar)
            .click() 
            .wait(4000)   
    }

    validarUsuarioCriado() {

        cy.get(elus.input_user_name)
            .type(usuarioG)

        cy.get(elus.btn_perquisar)
            .click()    

        cy.get(elus.usuario_fixo)
            .should('have.text', usuarioG)    
         
    }

} export default new usuario();