/// <reference types="cypress" />

const el = require('../elements/login_elements').ELEMENTS
const elal = require('../elements/login_elements').ALERTA

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

    validarTextoCredenciais(txt) {

        cy.get(elal.txt_credencial)
            .should('be.visible')
            .should('have.text', `${txt}`)
    }

    validarTextoRequeridoUsuario(txt, qtd) {

        cy.get(elal.txt_requerido_usuario)
            .should('be.visible')
            .contains(txt)
            .should('have.length', `${qtd}`)
    }

    validarTextoRequeridoPassword(txt, qtd) {

        cy.get(elal.txt_requerido_password)
            .should('be.visible')
            .contains(txt)
            .should('have.length', `${qtd}`)
    }

} export default new login();