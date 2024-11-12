## Seller Center - Automação de Testes com Cypress


<div>
    <p align="center">
        <img src="https://gestao.martins.com.br/images/martins-logo.svg"/>
        <img src="https://dev.painelsellers.martins.com.br/images/efacil-logo.svg">
    </p>
</div>


<h1 align="center"> Automação Plataforma Seller Center </h1>

<h3 align="center">Gestão - Seller</h3>

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
    <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
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
HTTPS: https://martinsdevsecops@dev.azure.com/martinsdevsecops/B2B-VendasDigitais/_git/Martins.Vendas.GestaoMarketplace.QA

SSH: git@ssh.dev.azure.com:v3/martinsdevsecops/B2B-VendasDigitais/Martins.Vendas.GestaoMarketplace.QA

# Com o terminal aberto instale as dependências rodando o comando
$ yarn

# Crie na raiz do projeto um arquivo "cypress.env.json" e preencha-o como no exemplo "template.env"

```


### Features em desenvolvimento
❌  ❗  ✅
<h1>Gestão </h1>
<p>
<h3> Login:    B2B  ✅ 
<h3> Fumaça:   B2B  ❗   (em aprimoramento)
<h3> Pedido:   B2B  ❗   (em aprimoramento)
<h3> Produto:  B2B  ❌  (em aprimoramento)
<h3> Seller:   B2B  ❗   (em aprimoramento)
<h3> Api:      B2B  ❗   (em aprimoramento)

</p>

<h1>Seller </h1>
<h3> Login:    B2C  ✅ 
<h3> Fumaça:   B2C  ❗   (em aprimoramento)
<h3> Pedido:   B2C  ❌   (em aprimoramento)
<h3> Produto:  B2C  ❌  (em aprimoramento)
<h3> Usuário:   B2C  ❗   (em aprimoramento)



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

## Autores

🧪🐞 [<img src="https://avatars.githubusercontent.com/u/111364510?s=96&v=4" width=115><br><sub>André Luís</sub>](https://github.com/AndreSektor)

🧪🐞 [<img src="https://avatars.githubusercontent.com/u/93921448?v=4" width=115><br><sub>Leopoldo Dantas</sub>](https://github.com/leopoldofd)