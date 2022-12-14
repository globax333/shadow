



it('Account details page', () => {
  cy.visit(`https://www.dev-react.livescore.com/en/pages/personal-details?username=livescore_media/liktj530qw@mailinator.com&password=Globax123`);

  cy.get('input[type="email"]')
  .shadow()
  .find('div')
})