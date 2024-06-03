describe('Teste tela de pesquisa', () => {
    let musicName = `Bosun Bill`
    before(() => {
        cy.visit('/')
    });

    it('Redirecionar pra tela de busca', () => {
        cy.get("[href='/Search']").click()
    });


    it('Procurar musica', () => {
        cy.get("[data-testid='campoBusca']").type(musicName)

        cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    });

    it('Filtar', async () => {
        cy.wait(1500);

        // cy.get("[aria-label='music-item']").first().click()
        cy.get("[aria-label='music-item']").filter(`:contains('${musicName}')`).first().then( (item) => {
            cy.get(item).click()
            item.find("[data-testid='icon-button']").click()
        });
        
    });
})