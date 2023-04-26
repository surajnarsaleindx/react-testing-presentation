describe('Counter', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('increments and decrements count', () => {
      cy.get('button').contains('-').as('decrementButton');
      cy.get('button').contains('+').as('incrementButton');
      cy.get('span').contains('0').as('count');
  
      cy.get('@incrementButton').click();
      cy.get('@count').should('contain', '1');
  
      cy.get('@decrementButton').click();
      cy.get('@count').should('contain', '0');
    });
  });
  