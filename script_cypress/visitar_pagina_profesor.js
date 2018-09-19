describe('Ingresar a página del profesor', function() {
    it('Ingresar a página del profesor.', function() {

        // Ingresar a página del profesor
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.get('.Select-input').find('input[role="combobox"]').type("Fernando Arruza", {force:true})
        cy.contains('Fernando Arruza Hedman - Ingeniería de Sistemas')

        cy.get('.Select-input').find('input[role="combobox"]').type('{enter}', {force:true})

        cy.contains('Soy Fernando...')
        cy.screenshot()
    })
})
