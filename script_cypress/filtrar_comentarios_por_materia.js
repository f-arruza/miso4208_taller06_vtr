describe('Filtrar comentarios por materia', function() {
    it('Filtrar comentarios por materia.', function() {

        // Buscar profesor
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.get('.Select-input').find('input[role="combobox"]').type("Rubby Casallas", {force:true})
        cy.contains('Rubby Casallas Gutierrez - Ingeniería de Sistemas')
        cy.get('.Select-input').find('input[role="combobox"]').type('{enter}', {force:true})
        cy.contains('Soy Rubby...')
        cy.screenshot()

        // Filtrar por ISIS2603
        cy.get('.materias').find('input[name="id:ISIS2603"]').check()
        cy.get('.jsx-3672521041').contains('Desarrollo De Sw En Equipo')
        cy.wait(2000)
        cy.get('.materias').find('input[name="id:ISIS2603"]').uncheck()
        cy.screenshot()

        // Filtrar por MISO4203
        cy.get('.materias').find('input[name="id:MISO4203"]').check()
        cy.get('.jsx-3672521041').contains('Gest. De Proy. Desarrollo Soft')
        cy.screenshot()
    })
})
