/// <reference types="cypress" />

import login from '../../support/pageObjects/login_page'
import dash from '../../support/pageObjects/dash_page'


describe('Funcionalidade Login', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('OrangeUrl'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
        login.validarTelaLogin()
    });

    it('1.Login com sucesso:', () => {

        login.login(Cypress.env('Usuario'), Cypress.env('Senha'));
        login.clicarBotaoLogin();
        dash.validarTextoDash('Dashboard');
    });

    it('2.UserName inválido:', () => {

        login.login(Cypress.env('UsuarioInv'), Cypress.env('Senha'));
        login.clicarBotaoLogin();
        login.validarTextoCredenciais('Invalid credentials');
    });

    it('3.Password inválido:', () => {

        login.login(Cypress.env('Usuario'), Cypress.env('SenhaInv'));
        login.clicarBotaoLogin();
        login.validarTextoCredenciais('Invalid credentials');
    });

    it('4.UserName e Password inválidos:', () => {

        login.login(Cypress.env('UsuarioInv'), Cypress.env('SenhaInv'));
        login.clicarBotaoLogin();
        login.validarTextoCredenciais('Invalid credentials');
    });

    it('5.Campo UserName vazio(Password válido):', () => {

        login.login('', Cypress.env('Senha'));
        login.clicarBotaoLogin();
        login.validarTextoRequeridoUsuario('Required', 1)
    });

    it('6.Campo UserName vazio(Password inválido):', () => {

        login.login('', Cypress.env('SenhaInv'));
        login.clicarBotaoLogin();
        login.validarTextoRequeridoUsuario('Required', 1)
    });    

    it('7.Campo Password vazio(UserName válido):', () => {

        login.login(Cypress.env('Usuario'), '');
        login.clicarBotaoLogin();
        login.validarTextoRequeridoPassword('Required', 1)
    });  

    it('8.Campo Password vazio(UserName inválido):', () => {

        login.login(Cypress.env('UsuarioInv'), '');
        login.clicarBotaoLogin();
        login.validarTextoRequeridoPassword('Required', 1)
    });  

    it('9.Campo UserName e Password vazios):', () => {

        login.login('', '');
        login.clicarBotaoLogin();
        login.validarTextoRequeridoUsuario('Required', 1)
        login.validarTextoRequeridoPassword('Required', 1)
    });  
});