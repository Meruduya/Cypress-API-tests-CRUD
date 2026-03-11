describe('User API - Integration Tests', () => {

  const newUser = { id: 0, firstName: 'Anna', surName: 'Ivanova' };
  const updatedUser = { firstName: 'Maria', surName: 'Petrova' };

  it('should create a user successfully', () => {
    cy.createUser(newUser).then((response) => {
      cy.expectSuccess(response).then((body) => {
        expect(body).to.have.property('id');
        cy.expectUserFields(body, newUser);
      });
    });
  });

  it('should update a user successfully', () => {
    cy.createUserAndGetId(newUser).then((userId) => {
      cy.updateUser(userId, updatedUser).then((response) => {
        cy.expectSuccess(response).then((body) => {
          cy.expectUserFields(body, updatedUser);
        });
      });
    });
  });

  it('should delete a user successfully', () => {
    cy.createUserAndGetId(newUser).then((userId) => {
      cy.deleteUser(userId).then((response) => {
        cy.expectSuccess(response);
      });
    });
  });
});