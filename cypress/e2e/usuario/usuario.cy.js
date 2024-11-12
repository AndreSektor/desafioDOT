/// <reference types="cypress" />

import login from '../../support/pageObjects/login_page'
import dash from '../../support/pageObjects/dash_page'
import usuario from '../../support/pageObjects/usuario_page'

describe('Funcionalidade Usuário', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('OrangeUrl'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
        login.validarTelaLogin()
        login.login(Cypress.env('Usuario'), Cypress.env('Senha'));
        login.clicarBotaoLogin();
        dash.validarTextoDash('Dashboard');
        usuario.acessarMenuAdmin()
        usuario.validarListaUsuarios()
    });

    it('Criar usuário com sucesso', () => {
        
        usuario.acessarCriarUsuario()
        usuario.validarCriacaoUsuario()
        usuario.preencherFormulario()
        usuario.validarUsuarioCriado()
        
    });
});