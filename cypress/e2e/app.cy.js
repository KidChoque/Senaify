describe('template spec', () => {
  before(() => {
    cy.visit('/')
  })
  it('Verificar se o header esta visive;', () => {
    let titleHead;

    //capturar o elemento title e ver se ele esta visivel
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", 'Good morning')
  })

  it('Verificar se existe itens na listagem da playlist', () => {
    cy.wait(2000);
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  });

  it('Clicar no primeiro item da lista', () => {
    cy.get("[aria-label='playlist-item']").first().click();
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  it('Clicar na musica desejada e executar o audio', () => {
    cy.wait(2000);
    cy.get("[aria-label='Mtg Quero Te Encontrar']").click();
  });
})