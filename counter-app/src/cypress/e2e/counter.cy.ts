describe('Counter', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('increments and decrements count', () => {
    cy.get('[data-testid=decrementButton]').as('decrementButton');
    cy.get('[data-testid=incrementButton]').as('incrementButton');
    cy.get('[data-testid=count]').as('count');

    cy.get('@incrementButton').click();
    cy.get('@count').should('contain', '1');

    cy.get('@decrementButton').click();
    cy.get('@count').should('contain', '0');
  });
});
