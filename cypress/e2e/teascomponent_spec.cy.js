describe('Teas Component Spec', () => {
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

	it('Teas Component Layout', () => {
		cy.get('h2').should('contain', 'Available Teas').should('be.visible')
		cy.get('td.teaType').should('contain', 'Type:').should('be.visible')
		cy.get('td.teaName').should('contain', 'Name:').should('be.visible')
		cy.get('td.teaDescription').should('contain', 'Description:').should('be.visible')
		cy.get('td.teaTemp').should('contain', 'Temp:').should('be.visible')
		cy.get('td.teaBrewtime').should('contain', 'Brew Time:').should('be.visible')
  })
})