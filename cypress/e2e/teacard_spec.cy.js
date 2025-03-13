describe('Tea Card Spec', () => {
	beforeEach(() => {
		cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions', {
      statusCode: 200,
      fixture: 'all_subscriptions.json'
    })
    .as('fetchAllSubscriptions');

		cy.intercept('GET', 'http://localhost:3000/api/v1/customers', {
      statusCode: 200,
      fixture: 'all_customers.json'
    })
    .as('fetchAllCustomers');

		cy.intercept('GET', 'http://localhost:3000/api/v1/teas', {
      statusCode: 200,
      fixture: 'all_teas.json'
    })
    .as('fetchAllTeas');
		
    cy.visit('http://localhost:5173')
		cy.wait('@fetchAllSubscriptions')
		cy.wait('@fetchAllCustomers')
		cy.wait('@fetchAllTeas')
		cy.get('button').eq(2).click()
  })

	it('Tea Card Layout', () => {
		cy.get('img[alt="Tea icon"]').should('be.visible')
		cy.get('td.teaName').should('contain', 'Arizona Green Tea').should('be.visible')
		cy.get('td.teaDescription').should('contain', 'Plastic bottle tea').should('be.visible')
		cy.get('td.teaTemp').should('contain', '2').should('be.visible')
		cy.get('td.teaBrewtime').should('contain', '15 - Mins').should('be.visible')
  })
})