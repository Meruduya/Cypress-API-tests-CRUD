# Cypress API tests — CRUD

API-тесты для учебного сервиса пользователей: создание, изменение и удаление пользователя.

**Stack:** `JavaScript` · `Cypress` · `REST API` · `Custom Commands`

## Что проверяется

| Тест | Запрос | Проверки |
|------|--------|----------|
| Создание пользователя | `POST /users` | статус 200, в ответе есть `id`, поля `firstName` и `surName` совпадают с отправленными |
| Изменение пользователя | `PUT /users/{id}` | статус 200, поля `firstName` и `surName` обновились |
| Удаление пользователя | `DELETE /users/{id}` | статус 200 |

## Структура

```
cypress/
├── e2e/users.api.cy.js     тестовые сценарии
└── support/commands.js     Custom Commands: createUser, updateUser, deleteUser,
                            createUserAndGetId, expectSuccess, expectUserFields
```

## Запуск

Тестируемый сервис должен быть запущен локально на `http://localhost:8080`.

```
npm install
npm test
```

Для запуска в интерактивном режиме Cypress:

```
npm run cy:open
```
