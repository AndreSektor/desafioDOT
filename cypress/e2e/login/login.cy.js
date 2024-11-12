/// <reference types="cypress" />

import login from '../../support/pageObjects/login_page'
import dash from '../../support/pageObjects/dash_page'


describe('Gestão - Funcionalidade Login - Canal Martins', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('OrangeUrl'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
        login.validarTelaLogin()
    });

    it('Login com sucesso', () => {

        login.login(Cypress.env('Usuario'), Cypress.env('Senha'));
        login.clicarBotaoLogin();
        dash.validarTextoDash('Dashboard');
    });

    // it('1.Login com sucesso:', () => {

    //     login.loginGestao(Cypress.env('Login_PROD_Gestão'), Cypress.env('senhaInvalida'));
    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Usuário ou senha incorretos');
    // });

    // it('2.UserName inválido:', () => {

    //     login.loginGestao(Cypress.env('Login_PROD_Gestão'), Cypress.env('senhaInvalida'));
    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Usuário ou senha incorretos');
    // });

    // it('3.Password inválido:', () => {

    //     login.loginGestao('', Cypress.env('Senha_PROD_Gestão'));
    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Campo login é obrigatório!');
    // });

    // it('4.UserName e Password inválidos:', () => {

    //     login.loginGestao('', Cypress.env('Senha_PROD_Gestão'));
    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Campo login é obrigatório!');
    // });

    // it('5.Campo UserName vazio(Password válido):', () => {

    //     login.loginGestao(Cypress.env('Login_PROD_Gestão'), '');
    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Campo senha é obrigatório!');
    // });

    // it('6.Campo UserName vazio(Password inválido):', () => {

    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Campo login é obrigatório!');
    //     base.validarTextosP('Campo senha é obrigatório!');
    // });    

    // it('7.Campo Password vazio(UserName válido):', () => {

    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Campo login é obrigatório!');
    //     base.validarTextosP('Campo senha é obrigatório!');
    // });  

    // it('8.Campo Password vazio(UserName inválido):', () => {

    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Campo login é obrigatório!');
    //     base.validarTextosP('Campo senha é obrigatório!');
    // });  

    // it('9.Campo UserName e Password vazios):', () => {

    //     base.clicarBotaoPorNome('Entrar');
    //     base.validarTextosP('Campo login é obrigatório!');
    //     base.validarTextosP('Campo senha é obrigatório!');
    // });  
});