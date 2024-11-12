## Orange HRM - Automação de Testes com Cypress


<div>
    <p align="center">
        <img src="https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309"/>
    </p>
</div>



<h3 align="center">Login - Usuário</h3>

## Descrição do Projeto

<p align="center">
    Projeto desenvolvido em JavaScript com Cypress, focado em recriar fluxos E2E e testes de API.
</p>

<h1 align="center">
    <p align="center">Ferramentas e Bibliotecas</p>
    <a href="https://cypress.io/">Cypress</a>
    <br></br>
    <a href="https://www.npmjs.com/package/faker-br">Faker-BR-NPM</a>
</h1>

## Status do Projeto

<p align="center">
    <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIDO&color=GREEN&style=for-the-badge"/>
</p>

### Pré-requisitos

Antes de começar, instale as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable). 
<br>
Recomendamos o uso do VSCode para edição de código. [VSCode](https://code.visualstudio.com/).


### Clonando e Instalando o Projeto

```bash

# Crie uma pasta na raiz do computador

# Acesse a pasta do projeto pelo VSCode 

# Clone o repositório do projeto
$ git clone: 
HTTPS: https://github.com/AndreSektor/desafioDOT.git

# Com o terminal aberto e o yarn instalado, instale as dependências rodando o comando
$ yarn

```


### Features em desenvolvidas
❌  ❗  ✅
<h1> Orange HRM </h1>
<p>
<h3> Login:      ✅ 
<h3> Usuários:   ✅

</p>


### 🎲 Rodando os testes

```bash
Comando para abrir cypress e escolher a feature que deseja executar
$ npx cypress open

Comando para executar os testes em headless com evidencia de vídeo todos as features serão executadas
$ npx cypress run

```


### 🃏 Regras para trabalhar no projeto.

- As Classes devem ser escritas sempre em, [camelCase](https://techlib.wiki/definition/pascalcase.html)
- A criação de em elemento na pasta elements deve ser sempre dentro de um EXPORT CONST e sempre com nomes genéricos de fácil entendimento. -
- Os arquivos criados dentro da pages sempre separados por "underline" EX.: - login_page.js -
- As funções dentro da pages sempre escritas com clareza do seu objetivo EX.: - acessarMenus() {} -
- FERRAMENTA para auxilio na captura de elementos:
1. Existe um arquivo de teste chamado "capturar_elementos.cy.js".
2. Ao abri-lo com o comando `npx cypress open`.
3. Deve-se selecior a opção "Create test with Cypress Studio"
4. Em seguida adicionar a URL do módulo que será mapeado.
5. Fazer todo a fluxo de clicar nós inputs, selects, radio-buttons, etc.
6. Após realizar todo mapeamento deve-se clicar em SALVAR.
7. Acessar o arquivo "capturar_elementos.cy.js" lá estaram todos os elementos já mapeados para alimentar o devido arquivo de elemento do módulo desejado!.
8. OBS.: O arquivo consta no gitignore(Boa prática depois de usa-lo sempre limpar todo o código capturado).

-

## Autor

🧪🐞 [<img src="https://avatars.githubusercontent.com/u/111364510?s=96&v=4" width=115><br><sub>André Luís</sub>](https://github.com/AndreSektor)