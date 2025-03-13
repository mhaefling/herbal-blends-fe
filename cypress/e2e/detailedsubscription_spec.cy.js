describe('Detailed Subscription Spec', () => {
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
  })

	describe('Detailed Subscription Spec Layout', () => {
		it('Confirms Detail Subscription Spec has a specific layout', () => {

			cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions//1', {
				statusCode: 200,
				fixture: 'sub_details.json'
			})
			.as('getSubDetails');

			cy.get('.subLink').eq(2).click()
			cy.wait('@getSubDetails')

			cy.get('h2').should('contain', 'Green Tea Lovers').should('be.visible')
			cy.get('p').should('contain', 'Subscription Price:').should('be.visible')
			cy.get('p').should('contain', 'Renews:').should('be.visible')
			cy.get('p').should('contain', '$5.50').should('be.visible')
			cy.get('p').should('contain', 'monthly').should('be.visible')
			cy.get('p').should('contain', 'Teas Included:').should('be.visible')
			cy.get('p').should('contain', 'Tea Description:').should('be.visible')
			cy.get('label').should('contain', 'Select Tea Description:').should('be.visible')
			cy.get('option').should('contain', 'Arizona Green Tea').should('exist')
			cy.get('p').should('contain', 'Active Customers:').should('be.visible')
			cy.get('p').should('contain', 'Deactive Customers:').should('be.visible')
			cy.get('p').should('contain', 'Jolly').should('be.visible')
			cy.get('p').should('contain', 'Green').should('be.visible')
		})
  })

	describe('Detailed Subscription Spec', () => {
		it('Confirms Tea Description functionality works', () => {

			cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions//1', {
				statusCode: 200,
				fixture: 'sub_details.json'
			})
			.as('getSubDetails');

			cy.get('.subLink').eq(2).click()
			cy.wait('@getSubDetails')

			cy.get('select').select('Arizona Green Tea');
			cy.get('p').should('contain', 'Description:').should('be.visible')
			cy.get('p').should('contain', 'Plastic bottle tea').should('be.visible')
			cy.get('p').should('contain', 'Temperature:').should('be.visible')
			cy.get('p').should('contain', '2').should('be.visible')
			cy.get('p').should('contain', 'Brew Time:').should('be.visible')
			cy.get('p').should('contain', '0 - Mins').should('be.visible')
		})
	})
})