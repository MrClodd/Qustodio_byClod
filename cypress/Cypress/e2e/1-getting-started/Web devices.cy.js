describe('App Qustodio', () => {
  beforeEach(() => {
    cy.visit('https://family.qustodio.com/parents-app')
  })

    // Login page Qustodio and connect more devices
  it('Login app ca be opened and connect a device', () => {
    // Add username
    cy.get('#form_email').click().type('claudiu.dumitru.alex@gmail.com')

    // Add password
    cy.get('#form_password').click().type('popo22')

    // Click login
    cy.get('.rck-btn__label').click()

    // Click on the menu on the left Devices
    cy.get('[data-testid="TransparentButton__PageTitle__pageTitle--menu"] > .rck-icon > .fa-regular').click()

    // Click on the menu on the left Devices
    cy.get('[data-testid="SideNavigationMenuAnchor__Your Devices"] > .rck-side-navigation-menu__anchor__content').click()

    // Click botton Add a device
    cy.get('[data-testid="Button__addDevice"]').click()

    // Click Action_input selectDevice
    cy.get('[data-testid="ActionInput__selectDevice"]').click()

    // Select Android option
    cy.get('[data-testid="DropdownOption__selectPlatformForDevice--android"]').click()

    // Take a screenshot of the Wikipedia page
    cy.screenshot()

  })
    })
 