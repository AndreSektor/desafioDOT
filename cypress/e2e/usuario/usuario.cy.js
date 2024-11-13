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
        usuario.acessarCriarUsuario()
        usuario.validarCriacaoUsuario()
    });

    it('1.Criação de usuário com sucesso:', () => {
        
        usuario.preencherFormulario()
        usuario.validarUsuarioCriado()
    });
    
    it('2.Validar campos obrigatórios na criação de usuário:', () => {
        
        usuario.validarCamposObrigatorios()
    });

    it('3.Validar campo Employee Name* inválido:', () => {
        
        usuario.validarCampoEmployeeInvalido()
    });
 
    it('4.Validar campo Username* menor que definido por regra(Mínimo 5 caracteres:', () => {
        
        usuario.validarCampoUsername()
    });
    
    it('5.Validar campo Password* menor que definido por regra(Mínimo 7 caracteres:', () => {
        
        usuario.validarCampoPassword('xpto')
    });
    
    it('6.Validar campo Password* com 7 caracteres e não contendo número(Mínimo 7 caracteres + 1 número):', () => {
        
        usuario.validarCampoPassword('xptoxpt')
    });
    
    it('7.Validar campo Password* com 7 caracteres, 1 número e ESPAÇO EM BRANCO(Não pode conter espaço em branco):', () => {

        usuario.validarCampoPassword('xptoxpt1 ')
    });    
   
    it('8.Validar campo Confirm Password* inválido:', () => {

        usuario.validarCampoConfirmPassword()
    }); 
});