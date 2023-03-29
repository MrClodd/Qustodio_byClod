describe('App Qustodio', () => {
  beforeEach(() => {
    cy.visit('https://family.qustodio.com/parents-app')
  })

    // Login page Qustodio and connect a device
  it('Login app ca be opened and connect a device', () => {
    // Add username
    cy.get('#form_email').click().type('claudiu.dumitru.alex@gmail.com')

    // Add password
    cy.get('#form_password').click().type('popo22')

    // Click login
    cy.get('.rck-btn__label').click()

    // Click botton Connect a device
    cy.get('.rck-list-item__no-border > :nth-child(1)').should('be.visible').click()

    // Click Action_input selectDevice
    cy.get('[data-testid="ActionInput__selectDevice"]').click()
    
    // Select Windows option
    cy.get('[data-testid="DropdownOption__selectPlatformForDevice--windows"]').should('be.visible').click()

    // Take a screenshot of the Wikipedia page
    cy.screenshot()
  })
    })
 