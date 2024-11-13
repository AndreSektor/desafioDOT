/// <reference types="cypress" />

const el = require('../elements/menu_elements').ELEMENTS
const elus = require('../elements/usuario_elements').LISTA
const elcr = require('../elements/usuario_elements').CRIACAO
const elms = require('../elements/usuario_elements').MENSAGENS

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
            .type('A')
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
        
        cy.get(elcr.select_status)  
            .click()
            .type('{downarrow}')
            .type('{enter}')  

        usuarioG = faker.name.jobArea();
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

    validarCamposObrigatorios() {
        cy.get(elcr.btn_salvar).click();
    
        const campos = [
            { seletor: elms.alerta_user_role, texto: 'Required' },
            { seletor: elms.alerta_employee, texto: 'Required' },
            { seletor: elms.alerta_status, texto: 'Required' },
            { seletor: elms.alerta_username, texto: 'Required' },
            { seletor: elms.alerta_password, texto: 'Required' },
            { seletor: elms.alerta_confirm_passwrod, texto: 'Passwords do not match' }
        ];
    
        campos.forEach(campo => {
            cy.get(campo.seletor).should('have.text', campo.texto);
        });
    }

    validarCampoEmployeeInvalido() {

        cy.get(elcr.input_employee_name)
            .type('XPto')
        
        cy.get(elcr.btn_salvar)
            .click()
            
        cy.get(elms.alerta_employee)
            .should('have.text', 'Invalid')    
    }

    validarCampoUsername() {

        cy.get(elcr.input_user_name)
            .type('XPto')
    
        cy.get(elcr.btn_salvar)
            .click()
        
        cy.get(elms.alerta_username)
            .should('have.text', 'Should be at least 5 characters') 
    }

    validarCampoPassword(valor) {
        // Limpa o campo de senha antes de cada variação
        cy.get(elcr.input_password).clear();
    
        switch (true) {
            case `${valor}`.length < 7: // Senha muito curta
                cy.get(elcr.input_password).type(`${valor}`);
                cy.get(elcr.btn_salvar).click();
                cy.get(elms.alerta_password).should('have.text', 'Should have at least 7 characters');
                break;
    
            case `${valor}`.length == 7: // Senha com número, mas muito curta
                cy.get(elcr.input_password).type(`${valor}`);
                cy.get(elcr.btn_salvar).click();
                cy.get(elms.alerta_password).should('have.text', 'Your password must contain minimum 1 number');
                break;
    
            case `${valor}`.includes(' '): // Senha válida com espaço (não deve ter espaço)
                cy.get(elcr.input_password).type(`${valor}`);
                cy.get(elcr.btn_salvar).click();
                cy.get(elms.alerta_password).should('have.text', 'Your password should not contain spaces');
                break;
    
            default:
                console.log('Caso não atendido');
        }
    }

    validarCampoConfirmPassword() {

        cy.get(elcr.input_password)
            .type('exemplo1')
        
        cy.get(elcr.input_confirm_password)
            .type('xpto')
        
        cy.get(elms.alerta_confirm_passwrod).should('have.text', 'Passwords do not match');
    }
} export default new usuario();