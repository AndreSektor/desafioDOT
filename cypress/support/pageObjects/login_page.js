/// <reference types="cypress" />

const el = require('../elements/login_elements').ELEMENTS

class login {

    validarTelaLogin() {

        Object.values(el).forEach(elemento => {
            cy.get(elemento)
                .should('be.visible')
                .should('not.be.disabled')
        });
    }

    login(login, senha) {
        
        cy.log('Preencher campo Login')
        login.length && cy.get(el.input_login).type(login);

        cy.log('Preencher campo Senha')
        senha.length && cy.get(el.input_password).type(senha, { log: false }); 
    }

    clicarBotaoLogin() {

        cy.get(el.btn_login)
            .should('be.visible')
            .click()
    }
} export default new login();