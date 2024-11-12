/// <reference types="cypress" />

import login from '../../../support/pageObjects/login_page'
import base from '../../../support/pageObjects/base'
import menus from '../../../support/pageObjects/menus_page'
import usuario from '../../../support/pageObjects/usuario_page'

describe('Seller - Funcionalidade Usuário - Canal Martins', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('SellerHML'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
        base.validarNomesBotoes('MARTINS');
        base.validarNomesBotoes('EFÁCIL');
        base.validarTextosH(5, 'Olá, Bem vindo ao Marketplace Sellers');
        login.loginSeller(Cypress.env('Loja_HML_Martins'),  Cypress.env('Login_HML_Martins'), Cypress.env('Senha_HML_Martins'));
        base.clicarBotaoPorNome('Entrar');
        base.validarTextosP('Início');
        menus.acessarMenus('Configurações', 'Usuários');
        base.clicarBotaoPorNome('Adicionar novo usuário');
    });

    it.only('Criar usuário com sucesso', () => {
        
        usuario.cadastrarUsuario()
        
    });
});