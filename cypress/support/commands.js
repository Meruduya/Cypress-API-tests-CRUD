// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const BASE_URL = 'http://localhost:8080';

Cypress.Commands.add('createUser', (userData) => {
  return cy.request({
    method: 'POST',
    url: `${BASE_URL}/users`,
    body: userData,
    headers: { 'Content-Type': 'application/json' },
  });
});

Cypress.Commands.add('updateUser', (id, userData) => {
  return cy.request({
    method: 'PUT',
    url: `${BASE_URL}/users/${id}`,
    qs: {
      firstName: userData.firstName,
      surName: userData.surName,
    },
  }); 
});

Cypress.Commands.add('deleteUser', (id) => {
  return cy.request({
    method: 'DELETE',
    url: `${BASE_URL}/users/${id}`,
    failOnStatusCode: false,
  });
});
Cypress.Commands.add('createUserAndGetId', (userData) => {
  return cy.createUser(userData).then((response) => response.body.id);
});

Cypress.Commands.add('expectSuccess', (response) => {
  expect(response.status).to.eq(200);
  return cy.wrap(response.body);
});

Cypress.Commands.add('expectUserFields', (body, expectedUser) => {
  expect(body.firstName).to.eq(expectedUser.firstName);
  expect(body.surName).to.eq(expectedUser.surName);
});