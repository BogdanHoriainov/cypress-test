
# UI Автотесты на фреймворке Cypress

Автоматизировать часть проверок регресса с помощью Cypress

Этот проект содержит автотесты для проверки функциональности авторизации, восстановления пароля и валидации формы на [личном тестовом сайте](https://cypressstart.netlify.app/).
> *Сайт предназначен для помощи начинающим тестировщикам ознакомиться с основными принципами автоматизированного тестирования веб-приложений.*
- Email: qabohdan@test.com
- Пароль: qabohdan%
  
 ![image](https://github.com/user-attachments/assets/bb3734ba-8fa9-47d7-ac30-b250ea50a8d7)

![image](https://github.com/user-attachments/assets/4c4de00b-3cd9-456d-b1cd-27d9524a8d8e)

## Установка и локальный запуск через Cypress UI
1. Установить node.js: https://nodejs.org/en/download/
2. Скачать проект из GitHub
![image](https://github.com/user-attachments/assets/f5c9eb0b-a469-4b41-ad9e-ab7e1a97aa60)
3. Открыть скачанный проект в IDE (например vs code)
4. В терминале зайти в папку со скаченным с GitHub репозиторием
5. Перейти в терминале в эту папку репозитория, например:
```bash
cd Путь/к/папке/с/проектом
```
Пример:
```bash
cd Desktop/cypress-test
```
6. В терминале в папке с проектом запустить
```bash
npm install --save-dev cypress@12.7.0
```
7. В папке с проектом в терминале запустить:
```bash
npm i
   ```
8. Запустить Сайпресс можно командой:
```bash
npx cypress open
```
9. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
10. Выбрать спеку cypressstart

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
3. Выполнить команду:
```
npx cypress run --spec cypress/e2e/cypressstart.cy.js --browser chrome
```
Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://github.com/user-attachments/assets/e5dab11c-69c8-4954-a000-b0ceadfeb159)

## Сценарии тестов

* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля
* Проверка на приведение к строчным буквам

## Детали реализации
1. baseUrl вынесен в переменные конфига
![image](https://github.com/user-attachments/assets/0939021d-47a0-45c2-8084-c5013b260f4a)

2. Применение хуков beforeEach и afterEach
![image](https://github.com/user-attachments/assets/de66f050-eda5-4623-9acb-f37bf2863962)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://github.com/user-attachments/assets/5bc4fcb6-81cd-482e-bd62-3e8816439d71)

4. Каждая страница описана в формате объекта с локаторами
![image](https://github.com/user-attachments/assets/f671218d-37be-4124-82c3-41c64333f3d7)


## 👨‍💻 Автор 

   **Горяинов Богдан** ([@chifuyu_cf](https://t.me/chifuyu_cf))  
