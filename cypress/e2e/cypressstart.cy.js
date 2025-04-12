import * as main_page from "../locators/cymain_page.json"
import * as result_page from "../locators/cyresult_page.json"
import * as data from "../helpers/default_data.json"
import * as recovery_page from "../locators/cyrecovery_password_page.json"

describe('Проверка авторизации', function () {

// Общая проверка футера и блока с аватарами
beforeEach('Запускается перед началом каждого автотеста', function () {
    cy.visit('/')
    cy.get('.bg-white', { timeout: 10000 }).should('be.visible')
    cy.get(main_page.avatars).should('be.visible')
    cy.get(main_page.title).should('be.visible').contains('Авторизация')
    cy.get(main_page.fogot_pass_btn)
      .should('be.visible')
      .and('have.css', 'color', 'rgb(59, 130, 246)')
    cy.get(main_page.footer).should('be.visible')
    cy.get(main_page.email).should('be.visible')
    cy.get(main_page.email_text).contains('Email')
    cy.get(main_page.password).should('be.visible')
    cy.get(main_page.password_text).contains('Пароль')
    cy.get(main_page.walpaper).should('be.visible')
    cy.get(main_page.avatars).click()
    cy.get(main_page.avatars_block).should('be.visible')
    cy.get(main_page.avatars_text).should('be.visible')
    cy.get(main_page.avatars_github).should('be.visible')
  })
  
  afterEach('Запускается перед концом каждого автотеста', function () {
    cy.get(main_page.footer).contains('© 2024 Designed Developed by Bogdan')
    cy.get(main_page.avatars).should('be.visible')
    cy.get(main_page.avatars_block).should('be.visible')
    cy.get(main_page.avatars_text)
      .should('be.visible')
      .contains('Этот сайт создан, чтобы помочь начинающим автотестерам освоить Cypress. Удачи;) Валера, спасибо за идею!')
    cy.get(main_page.avatars_github)
      .should('be.visible')
      .should('have.attr', 'href', 'https://github.com/BogdanHoriainov/cypress-test')
    cy.get(main_page.walpaper).should('be.visible')
  })

  it('Правильный логин и пароль', function () {
    cy.get(main_page.email).type(data.email)
    cy.get(main_page.password).type(data.password)
    cy.get(main_page.login_button).click()
    cy.get(result_page.title).should('be.visible').contains('Успешно авторизировались')
    cy.get(result_page.footer).should('be.visible')
    cy.get(result_page.close).should('be.visible')
    cy.get(result_page.block).should('be.visible')
  })

  it('Верный логин и не верный пароль', function () {
    cy.get(main_page.email).type(data.email)
    cy.get(main_page.password).type('Bohdan')
    cy.get(main_page.login_button).click()
    cy.get(result_page.title_error).contains('Неверный email или пароль')
  })

  it('проверка логики восстановления пароля', function () {
    cy.get(main_page.fogot_pass_btn).click()
    cy.get(recovery_page.title).should('be.visible')
    cy.get(recovery_page.form).should('be.visible')
    cy.get(recovery_page.email).should('be.visible')
    cy.get(recovery_page.email_text).type(data.email)
    cy.get(recovery_page.send_button).click()
    cy.get(result_page.title).should('be.visible').contains('Успешно авторизировались')
    cy.get(result_page.footer).should('be.visible')
    cy.get(result_page.close).should('be.visible')
    cy.get(result_page.block).should('be.visible')
  })

  it('Неверный логин и верный пароль', function () {
    cy.get(main_page.email).type('gfgfg@gmail.com')
    cy.get(main_page.password).type(data.password)
    cy.get(main_page.login_button).click()
    cy.get(result_page.title_error).contains('Неверный email или пароль')
  })

  // it('Логин без @ и верный пароль', function () {
  //   cy.get(main_page.email).type('gfgfggmail.com')
  //   cy.get(main_page.password).type(data.password)
  //   cy.get(main_page.login_button).click()
  //   cy.get(result_page.title).contains('Нужно исправить проблему валидации')
  // })

  it('Проверка на приведение к строчным буквам в логине и верный пароль', function () {
    cy.get(main_page.email).type('QaBohdan@Test.com')
    cy.get(main_page.password).type(data.password)
    cy.get(main_page.login_button).click()
    cy.get(result_page.title_error).contains('Неверный email или пароль')
  })

})

//npm install --save-dev cypress@12.7.0
//npm i
//npx cypress open
 // так же можно запустить через теринал: npx cypress run --spec cypress/e2e/cypressstart.cy.js --browser chrome ну или //npx cypress open :)